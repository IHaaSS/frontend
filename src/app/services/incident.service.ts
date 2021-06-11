import { Injectable } from '@angular/core';
import { plainToClass } from 'class-transformer';
import { Incident } from 'model/incident';
import exampleIncident from 'model/incidentExample.json'

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  public incident: Incident;

  constructor() {
    this.incident = new Incident();
    // console.log(plainToClass(Incident, exampleIncident)); //war ein Test. funktioniert allerdings nicht richtig
   }

  getIncidents(): Incident{
    return this.incident;
  }

  updateInicdent() {
    
  }
}
