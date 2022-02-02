import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion/expansion-panel';
import { Incident } from 'app/model/incident';
import { ContractIncident } from 'app/services/contract.service';
import { IncidentService } from 'app/services/incident.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  userIncidentsLoaded: boolean = false;

  constructor(public incidentService: IncidentService) { }

  async ngOnInit(): Promise<void> {
    await this.incidentService.getUserIncidents();
    this.userIncidentsLoaded = true;
    console.log(this.incidentService.userIncidents);
  }
}
