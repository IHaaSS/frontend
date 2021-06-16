import { Component, OnInit, ViewChild } from '@angular/core';
import { IncidentService } from 'app/services/incident.service';
import { Incident, IncidentElement } from 'model/incident';
import sources from 'model/sources.json';
import events from 'model/events.json';
import entities from 'model/entities.json';
import impacts from 'model/impacts.json';
import { IncidentTree } from './tree-selector/tree-selector.component';

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
  serverAnswer;

  done: boolean;
  sourcesTree: IncidentTree;
  impactTree: IncidentTree;
  entitiesTree: IncidentTree;
  eventsTree: IncidentTree;
  loading = true;
  concluded = false;
  stixIncidentUrl = '';
  buttonNext = 'Next';

  selected = [];

  constructor(private incidentService: IncidentService) {
    this.sourcesTree = sources;
    this.eventsTree = events;
    this.entitiesTree = entities;
    this.impactTree = impacts;
  }

  async ngOnInit(): Promise<void> {
    this.incident = this.incidentService.getIncidents();
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


  dateChange(event: any) {
    this.incident.time = event.value.format('YYYY-MM-DD');
  }
}
