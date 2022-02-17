import { Component, Input, OnInit } from '@angular/core';
import { IncidentComment } from 'app/model/incident-comment';
import { Users } from 'app/model/users';
import { ContractService } from 'app/services/contract.service';

@Component({
  selector: 'app-incident-comment',
  templateUrl: './incident-comment.component.html',
  styleUrls: ['./incident-comment.component.css']
})
export class IncidentCommentComponent implements OnInit {
  @Input() comment: IncidentComment;

  usernames = Users.usernames;

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    console.log(this.comment);
  }

  public async vote(vote: number) {
    await this.contractService.postVote(this.comment.ref, vote, true);
    if(vote[1] > 0){
      this.comment.votes.upvotes++;
    }
    if(vote[1] < 0){
      this.comment.votes.downvotes++;
    }
  }
}
