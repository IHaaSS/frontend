import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { Incident, Status } from 'app/model/incident';
import { IncidentComment } from 'app/model/incident-comment';
import { ContractComment, ContractIncident, ContractService } from 'app/services/contract.service';
import { Users } from 'app/model/users';
import { UsersService } from 'app/services/users.service';

@Component({
  selector: 'app-incident-card',
  templateUrl: './incident-card.component.html',
  styleUrls: ['./incident-card.component.css']
})
export class IncidentCardComponent implements OnInit {
  @Input() contractIncident: ContractIncident;
  @ViewChild('commentsPanel') commentsPanel: MatExpansionPanel;

  votes = {upvotes: 0, downvotes: 0};
  numberComments = 0;

  incident: Incident;
  comments: IncidentComment[] = [];
  commentsLoading = false;
  postingLoading = false;
  impact: string;
  usernames = Users.usernames;
  date: Date;
  
  stati = Status;

  newComment: string = "";

  constructor(private contractService: ContractService, private usersService: UsersService) { }

  ngOnInit(): void {
    console.log(this.contractIncident);
    this.date = new Date(this.contractIncident.created * 1000);
    this.numberComments = this.contractIncident.comments.length;
    this.votes = this.calculateVotes(this.contractIncident.votes);
    this.loadIncidentData();
  }

  async loadIncidentData() {
    this.incident = JSON.parse(await this.contractService.getIpfsContent(this.contractIncident.content));
    this.incident.status = Status.DISCUSSION;
    console.log(this.incident);
    this.impact = (this.incident.impacts[0] as any).impact[0];
  }

  async loadComments() {
    console.log('loading Comments')
    console.log(this.comments);
    if (this.comments.length === this.contractIncident.comments.length || this.comments.length != 0) {
      return;
    } 

    this.comments = [];
    this.commentsLoading = true;
    const promises: Promise<any>[] = [];
    this.contractIncident.comments.forEach((comment, index) => {
      promises.push((async () => {
        const result = await this.contractService.getIpfsContent(comment.content);
        this.comments[index] = {
          author: this.contractIncident.author,
          content: result,
          created: new Date(this.contractIncident.created * 1000),
          votes: this.calculateVotes(comment.votes),
          ref: comment.ref
        };
      })());
    })
    for (const comment of this.contractIncident.comments) {
    }
    await Promise.all(promises);
    console.log(this.comments);
    this.commentsLoading = false;
  }

  public async vote(vote: number) {
    await this.contractService.postVote(this.contractIncident.ref, vote);
    if(vote > 0){
      this.votes.upvotes++;
    }
    if(vote < 0){
      this.votes.downvotes++;
    }
  }

  public async toggleComments() {
    console.log('toggle comments')
    if (this.commentsPanel.expanded) {
      this.commentsPanel.close();
    } else {
      await this.loadComments();
      console.log('opening')
      console.log(this.comments)
      this.commentsPanel.open();
    }
  }

  public async postComment(){
    console.log("Posting comment: " + this.newComment);
    this.postingLoading = true;
    let ref = await this.contractService.postComment(this.contractIncident.ref, this.contractIncident.ref, {author: 'Petra', text: this.newComment});
    console.log(ref);
    this.comments.push({
      author: this.usersService.role,
      created: new Date(),
      votes: {upvotes: 0, downvotes: 0},
      content: this.newComment,
      ref: ref
    });
    this.numberComments++;
    this.newComment = '';
    this.postingLoading = false;
  }

  private calculateVotes(votes: []): {upvotes: number, downvotes: number}{
    let upvotes = 0;
    let downvotes = 0;
    votes.forEach(vote => {
      if(vote[1] > 0){
        upvotes++;
      }
      if(vote[1] < 0){
        downvotes++;
      }
    });
    return {upvotes: upvotes, downvotes: downvotes};
  }
}
