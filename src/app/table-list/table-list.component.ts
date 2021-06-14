import { Component, OnInit } from '@angular/core';
import { IncidentService } from 'app/services/incident.service';
import { Incident } from 'model/incident';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  incident: Incident;

  public incidents = [
    {id: "1", name: "Angriff", source: "Malory", event: "ganz böses Ereignis", entities: "ganze blockchain", impact: "alles kaputt"},
    {id: "2", name: "Angriff", source: "Malory", event: "ganz böses Ereignis", entities: "ganze blockchain", impact: "alles kaputt"},
    {id: "3", name: "Angriff", source: "Malory", event: "ganz böses Ereignis", entities: "ganze blockchain", impact: "alles kaputt"},
    {id: "4", name: "Angriff", source: "Malory", event: "ganz böses Ereignis", entities: "ganze blockchain", impact: "alles kaputt"},
    {id: "5", name: "Angriff", source: "Malory", event: "ganz böses Ereignis", entities: "ganze blockchain", impact: "alles kaputt"},
    {id: "6", name: "Angriff", source: "Malory", event: "ganz böses Ereignis", entities: "ganze blockchain", impact: "alles kaputt"},
    {id: "7", name: "Angriff", source: "Malory", event: "ganz böses Ereignis", entities: "ganze blockchain", impact: "alles kaputt"},
    {id: "8", name: "Angriff", source: "Malory", event: "ganz böses Ereignis", entities: "ganze blockchain", impact: "alles kaputt"},
    {id: "9", name: "Angriff", source: "Malory", event: "ganz böses Ereignis", entities: "ganze blockchain", impact: "alles kaputt"},
    {id: "10", name: "Angriff", source: "Malory", event: "ganz böses Ereignis", entities: "ganze blockchain", impact: "alles kaputt"},
    {id: "11", name: "Angriff", source: "Malory", event: "ganz böses Ereignis", entities: "ganze blockchain", impact: "alles kaputt"},
    {id: "12", name: "Angriff", source: "Malory", event: "ganz böses Ereignis", entities: "ganze blockchain", impact: "alles kaputt"},
    {id: "13", name: "Angriff", source: "Malory", event: "ganz böses Ereignis", entities: "ganze blockchain", impact: "alles kaputt"},
    {id: "14", name: "Angriff", source: "Malory", event: "ganz böses Ereignis", entities: "ganze blockchain", impact: "alles kaputt"},
    {id: "15", name: "Angriff", source: "Malory", event: "ganz böses Ereignis", entities: "ganze blockchain", impact: "alles kaputt"},
    {id: "16", name: "Angriff", source: "Malory", event: "ganz böses Ereignis", entities: "ganze blockchain", impact: "alles kaputt"},
    {id: "17", name: "Angriff", source: "Malory", event: "ganz böses Ereignis", entities: "ganze blockchain", impact: "alles kaputt"},
    {id: "18", name: "Angriff", source: "Malory", event: "ganz böses Ereignis", entities: "ganze blockchain", impact: "alles kaputt"},
    {id: "19", name: "Angriff", source: "Malory", event: "ganz böses Ereignis", entities: "ganze blockchain", impact: "alles kaputt"},
    {id: "20", name: "Angriff", source: "Malory", event: "ganz böses Ereignis", entities: "ganze blockchain", impact: "alles kaputt"},
    {id: "21", name: "Angriff", source: "Malory", event: "ganz böses Ereignis", entities: "ganze blockchain", impact: "alles kaputt"},
  ]

  constructor(incidentService: IncidentService) { 
    this.incident = incidentService.getIncidents();
  }

  ngOnInit() {
  }

}
