import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompactIncidentComponent } from './compact-incident.component';

describe('CompactIncidentComponent', () => {
  let component: CompactIncidentComponent;
  let fixture: ComponentFixture<CompactIncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompactIncidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompactIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
