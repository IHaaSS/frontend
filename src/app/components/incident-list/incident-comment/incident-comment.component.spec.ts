import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentCommentComponent } from './incident-comment.component';

describe('IncidentCommentComponent', () => {
  let component: IncidentCommentComponent;
  let fixture: ComponentFixture<IncidentCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
