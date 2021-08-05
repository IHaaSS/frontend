import { Component, Input, OnInit } from '@angular/core';
import { IncidentComment } from 'app/model/incident-comment';

@Component({
  selector: 'app-incident-comment',
  templateUrl: './incident-comment.component.html',
  styleUrls: ['./incident-comment.component.css']
})
export class IncidentCommentComponent implements OnInit {
  @Input() comment: IncidentComment;

  constructor() { }

  ngOnInit(): void {
  }

  public vote(vote: number): void {
    this.comment.votes += vote;
  }
}
