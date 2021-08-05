import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { Incident } from 'app/model/incident';
import { ContractIncident, ContractService } from 'app/services/contract.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-incident-card',
  templateUrl: './incident-card.component.html',
  styleUrls: ['./incident-card.component.css']
})
export class IncidentCardComponent implements OnInit {
  @Input() contractIncident: ContractIncident;
  @ViewChild('commentsPanel') commentsPanel: MatExpansionPanel;

  votes = 0;
  numberComments = 0;

  incident: Incident;
  comments: string[] = [];
  commentsLoading = false;

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    console.log(this.contractIncident);
    this.loadIncidentData();
  }

  async loadIncidentData() {
    this.incident = await this.contractService.getIpfsContent(this.contractIncident.content);

  }

  async loadComments() {
    this.commentsLoading = true;
    const promises: Promise<any>[] = [];
    for (const comment of this.contractIncident.comments) {
      promises.push(this.contractService.getIpfsContent(comment.content));
    }
    await Promise.all(promises);
    this.commentsLoading = false;
  }

  public vote(vote: number): void {
    this.votes += vote;
  }

  public async toggleComments() {
    if (this.commentsPanel.expanded) {
      this.commentsPanel.close();
    } else {
      await this.loadComments();
      this.commentsPanel.open();
    }
  }
}
