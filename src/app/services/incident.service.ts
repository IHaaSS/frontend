import { Injectable } from '@angular/core';
import { Incident } from 'model/incident';

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
