import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incident-comment',
  templateUrl: './incident-comment.component.html',
  styleUrls: ['./incident-comment.component.css']
})
export class IncidentCommentComponent implements OnInit {
  votes = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public vote(vote: number): void {
    this.votes += vote;
  }

}
