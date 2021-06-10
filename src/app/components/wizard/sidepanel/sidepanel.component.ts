import { Component, OnInit } from '@angular/core';
import { IncidentService } from 'app/services/incident.service';
import { Incident } from 'model/incident';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.css']
})
export class SidepanelComponent implements OnInit {
  incident: Incident;

  constructor(incidentService: IncidentService) { 
    this.incident = incidentService.getIncidents();
  }

  ngOnInit(): void {
    setInterval(()=>{
      console.log(this.incident);

    }, 10000)
  }

}
