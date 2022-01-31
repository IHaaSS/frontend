import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion/expansion-panel';
import { ContractIncident } from 'app/services/contract.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  public contractIncidents: ContractIncident[];

  constructor() { }

  ngOnInit(): void {
  }

}
