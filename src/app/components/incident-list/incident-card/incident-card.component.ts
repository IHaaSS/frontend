import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { Incident } from 'app/model/incident';

@Component({
  selector: 'app-incident-card',
  templateUrl: './incident-card.component.html',
  styleUrls: ['./incident-card.component.css']
})
export class IncidentCardComponent implements OnInit {
  @Input() incident: Incident;
  @ViewChild('commentsPanel') commentsPanel: MatExpansionPanel;

  votes = 0;
  numberComments = 0;

  constructor() { }

  ngOnInit(): void {
    console.log(this.incident);
  }

  public vote(vote: number): void {
    this.votes += vote;
  }

  public toggleComments() {
    if (this.commentsPanel.expanded) {
      this.commentsPanel.close();
    } else {
      this.commentsPanel.open();
    }
  }
}
