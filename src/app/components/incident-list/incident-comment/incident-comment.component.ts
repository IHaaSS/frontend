import { Component, Input, OnInit } from '@angular/core';
import { IncidentComment } from 'app/model/incident-comment';
import { Users } from 'app/model/users';

@Component({
  selector: 'app-incident-comment',
  templateUrl: './incident-comment.component.html',
  styleUrls: ['./incident-comment.component.css']
})
export class IncidentCommentComponent implements OnInit {
  @Input() comment: IncidentComment;

  usernames = Users.usernames;

  constructor() { }

  ngOnInit(): void {
    console.log(this.comment);
  }

  public vote(vote: number): void {
    this.comment.votes += vote;
  }
}
