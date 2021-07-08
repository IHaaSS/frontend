import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefinementDialogComponent } from './refinement-dialog.component';

describe('RefinementDialogComponent', () => {
  let component: RefinementDialogComponent;
  let fixture: ComponentFixture<RefinementDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefinementDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefinementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
