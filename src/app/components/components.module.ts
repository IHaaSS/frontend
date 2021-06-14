import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WizardComponent } from './wizard/wizard.component';
import { TreeSelectorComponent } from './wizard/tree-selector/tree-selector.component';
import { EventConstraintPipe } from './wizard/tree-selector/event-constraint.pipe';
import { FormsModule } from '@angular/forms';
import { SidepanelComponent } from './wizard/sidepanel/sidepanel.component';
import { IncidentCardComponent } from './incident-card/incident-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatStepperModule,
    MatExpansionModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    MatTooltipModule,
    MatListModule,
    MatIconModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    WizardComponent,
    TreeSelectorComponent,
    EventConstraintPipe,
    SidepanelComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
