import { Injectable } from '@angular/core';
import { Incident } from 'app/model/incident';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  public incident: Incident;

  constructor() {
    this.incident = new Incident();
   }

  getIncidents(): Incident {
    return this.incident;
  }

  updateInicdent() {
  }
}
