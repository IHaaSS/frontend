import { Component, Input, OnInit } from '@angular/core';
import { Incident } from 'app/model/incident';
import { IncidentService } from 'app/services/incident.service';

@Component({
  selector: 'app-admin-card',
  templateUrl: './admin-card.component.html',
  styleUrls: ['./admin-card.component.css']
})
export class AdminCardComponent implements OnInit {
  @Input() incident: Incident;
  impact: string;
  approveLoading: boolean = false;
  declineLoading: boolean = false;

  constructor(private incidentService: IncidentService) { }

  ngOnInit(): void {
    this.impact = (this.incident as any).impacts[0].impact[0];
  }

  async approveIncident(){
    this.approveLoading = true;
    await this.incidentService.approveIncident(this.incident);
    this.approveLoading = false;
  }

  async declineIncident(){
    this.declineLoading = true;
    await this.incidentService.deleteUserIncident(this.incident.myId);
    this.declineLoading = false;
  }
}
