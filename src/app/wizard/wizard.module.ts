import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { WizardComponent } from './wizard.component';
import { TreeSelectorComponent } from './tree-selector/tree-selector.component';
import { SidepanelComponent } from './sidepanel/sidepanel.component';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { EventConstraintPipe } from './tree-selector/event-constraint.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    WizardComponent,
    TreeSelectorComponent,
    SidepanelComponent,
    EventConstraintPipe
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    EventConstraintPipe
  ]
})
export class WizardModule { }
