import { Component, OnInit, ViewChild } from '@angular/core';
import { IncidentService } from 'app/services/incident.service';
import { Incident, IncidentElement } from 'app/model/incident';
import sources from 'app/model/sources.json';
import events from 'app/model/events.json';
import entities from 'app/model/entities.json';
import impacts from 'app/model/impacts.json';
import indicators from 'app/model/indicators.json';
import { IncidentTree } from './tree-selector/tree-selector.component';
import { MatDialog } from '@angular/material/dialog';
import { RefinementDialogComponent } from './refinement-dialog/refinement-dialog.component';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {
  @ViewChild('wizard') wizard: any;
  @ViewChild('sourcesAccordion') sourcesAccordion: any;

  incident: Incident;
  sourcesPanelOpened: boolean[] = [true];
  eventsPanelOpened: boolean[] = [true];
  entitiesPanelOpened: boolean[] = [true];
  impactsPanelOpened: boolean[] = [true];

  done: boolean;
  sourcesTree: IncidentTree;
  impactTree: IncidentTree;
  entitiesTree: IncidentTree;
  eventsTree: IncidentTree;
  loading = true;
  concluded = false;
  stixIncidentUrl = '';
  buttonNext = 'Next';

  indicatorsArr = indicators.indicators;
  selectedIndicators;

  selected = [];

  constructor(private incidentService: IncidentService, private dialog: MatDialog) {
    this.sourcesTree = sources;
    this.eventsTree = events;
    this.entitiesTree = entities;
    this.impactTree = impacts;
  }

  async ngOnInit(): Promise<void> {
    this.incident = this.incidentService.getIncident();
  }


  addSource(): void {
    this.addElement(
      this.incident.sources,
      this.sourcesPanelOpened,
      { source: [], description: '' });
    this.incident.addSource(new IncidentElement());
  }

  addEvent(): void {
    this.addElement(
      this.incident.events,
      this.eventsPanelOpened,
      { event: [], description: '' });
    this.incident.addEvent(new IncidentElement());
  }

  addEntity(): void {
    this.addElement(
      this.incident.entities,
      this.entitiesPanelOpened,
      { entity: [], description: '' });
    this.incident.addEntity(new IncidentElement());
  }

  addElement(elementArray: { description: string }[], openedArray: boolean[], element: any): void {
    if (elementArray.length < openedArray.length) {
      openedArray.splice(elementArray.length, openedArray.length);
    }
    openedArray.forEach((_e, i) => {
      openedArray[i] = false;
    });
    openedArray.push(true);
  }

  onConclude() {
    console.log(this.incident);
  }

  onSubmit() {
    if (this.incident.title) {
      this.openRefinementDialog();
    }
  }

  openRefinementDialog() {
    const dialogRef = this.dialog.open(RefinementDialogComponent, {
      width: '800px',
      data: this.incident
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  dateChange(event: any) {
    this.incident.time = event.value.format('YYYY-MM-DD');
  }
}
