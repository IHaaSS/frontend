import { Component, OnInit } from '@angular/core';
import { IncidentService } from 'app/services/incident.service';
import { Incident } from 'app/model/incident';
import { ContractIncident, ContractService } from 'app/services/contract.service';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent implements OnInit {
  public contractIncidents: ContractIncident[];
  constructor(private contractService: ContractService) {
  }

  ngOnInit() {
    this.contractService.getIncidents().then(contractIncidents => {
      if(!contractIncidents){
        return;
      }
      this.contractIncidents = contractIncidents.sort((a, b) => {
        return b.created - a.created;
      });
    });
  }

}
