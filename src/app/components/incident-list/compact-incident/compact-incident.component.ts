import { Component, Input, OnInit } from '@angular/core';
import { Incident } from 'app/model/incident';

@Component({
  selector: 'app-compact-incident',
  templateUrl: './compact-incident.component.html',
  styleUrls: ['./compact-incident.component.css']
})
export class CompactIncidentComponent implements OnInit {
  @Input() incident: any;

  tableData: string[][] = [];

  constructor() { }

  ngOnInit(): void {
    console.log('Preparing incident table for: ');
    console.log(this.incident);
    // prepare incident data for table
    this.incident.sources.forEach((element, index) => {
      if (!this.tableData[index]) {
        this.tableData[index] = [];
      }
      this.tableData[index][0] = element.source[element.source.length - 2];
    });
    this.incident.events.forEach((element, index) => {
      if (!this.tableData[index]) {
        this.tableData[index] = [];
      }
      this.tableData[index][1] = element.event[element.event.length - 2];
    });
    this.incident.entities.forEach((element, index) => {
      if (!this.tableData[index]) {
        this.tableData[index] = [];
      }
      this.tableData[index][2] = element.entity[element.entity.length - 2];
    });
    this.incident.impacts.forEach((element, index) => {
      if (!this.tableData[index]) {
        this.tableData[index] = [];
      }
      this.tableData[index][3] = element.impact[element.impact.length - 2];
    });

    // fill empty cells
    for (let i = 0; i < this.tableData.length; i++) {
      for (let j = 0; j < 4; j++) {
        if (!this.tableData[i][j]) {
          this.tableData[i][j] = '';
        }
      }
    }
    console.log(this.tableData);
  }

}
