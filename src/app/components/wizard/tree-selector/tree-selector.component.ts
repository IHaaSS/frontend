import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IncidentService } from 'app/services/incident.service';
import { Incident, IncidentElement } from 'model/incident';
import { EventConstraintPipe } from './event-constraint.pipe';

@Component({
  selector: 'app-tree-selector',
  templateUrl: './tree-selector.component.html',
  styleUrls: ['./tree-selector.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: TreeSelectorComponent,
    multi: true
  }]
})
export class TreeSelectorComponent implements OnInit, OnChanges, ControlValueAccessor {
  @Input() incidentTree: IncidentTree;
  @Input() triggeredBy: string;
  @Output() valueChange = new EventEmitter();

  incident: Incident;
  choices: any = [];
  selections: IncidentElement = new IncidentElement();
  test = "test"

  constructor(private incidentService: IncidentService) {
    this.selections.elements = [];
   }

  ngOnInit() {
    this.incident = this.incidentService.getIncidents();
    this.choices[0] = this.incidentTree.elements;
    
  }

  selectionChange(value: any, i: number) {
    for (let j = this.selections.elements.length - 1; j > i; j--) {
      this.choices.pop();
      this.selections.elements.pop();
    }

    if (value === undefined) {
      this.selections.elements.pop();
      this.choices.pop();
      if (this.choices.length == 0)
        this.choices[0] = this.incidentTree[Object.keys(this.incidentTree)[0]];
    }
    else {
      this.selections.elements[i] = value.name;
      this.selections.elementId = value.id;
    }
    if (value.elements){
      this.choices[i + 1] = value.elements;
    }

    this.valueChange.emit(this.selections);
  }

  registerOnTouched(): void {
  }

  registerOnChange(fn: any): void {
    this.valueChange.subscribe((data: IncidentElement) => fn(data));
  }
  
  writeValue(value: IncidentElement): void {
    this.selections = value;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.triggeredBy) {
      let eventConstraintPipe: EventConstraintPipe = new EventConstraintPipe();
      this.selections.elements.forEach((selection, i) => {
        if (!eventConstraintPipe.isEventAllowed(
            selection,
            this.incident.getElementById(changes.triggeredBy.currentValue).elements)) {
          this.selectionChange(undefined, i);
        }
      });
    }
  }
}

export class IncidentTree{
  name: string;
  elements?: IncidentTree[];
  id?: string;
  tooltip?: string;
}