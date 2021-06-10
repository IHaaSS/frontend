import { Injectable } from '@angular/core';
import { Incident } from 'model/incident';
import exampleIncident from 'model/incidentExample.json'

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  public incident: Incident = new Incident();

  constructor() { }

  getIncidents(): Incident{
    return this.incident;
  }

  updateInicdent() {
    
  }
}
