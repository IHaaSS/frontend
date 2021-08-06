import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { Incident } from 'app/model/incident';
import { IncidentComment } from 'app/model/incident-comment';
import { ContractIncident, ContractService } from 'app/services/contract.service';
import { Users } from 'app/model/users';
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
  comments: IncidentComment[] = [];
  commentsLoading = false;
  impact: string;
  usernames = Users.usernames;
  date: Date;

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    console.log(this.contractIncident);
    this.date = new Date(this.contractIncident.created * 1000);
    this.loadIncidentData();
  }

  async loadIncidentData() {
    this.incident = await this.contractService.getIpfsContent(this.contractIncident.content);
    this.impact = (this.incident.impacts[0] as any).impact[0];
  }

  async loadComments() {
    if (this.comments.length === this.contractIncident.comments.length) {
      return;
    } else {
      this.comments = [];
    }
    this.commentsLoading = true;
    const promises: Promise<any>[] = [];
    for (const comment of this.contractIncident.comments) {
      promises.push((async () => {
        const result = await this.contractService.getIpfsContent(comment.content);
        this.comments.push({
          author: this.contractIncident.author,
          content: result.content,
          created: new Date(this.contractIncident.created * 1000),
          votes: this.contractIncident.votedUp.length - this.contractIncident.votedDown.length
        });
      })());
    }
    await Promise.all(promises);
    console.log(this.comments);
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
