import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from 'app/components/dashboard/dashboard.component';
import { IncidentListComponent } from 'app/components/incident-list/incident-list.component';
import { IncidentCardComponent } from 'app/components/incident-list/incident-card/incident-card.component';
import { IncidentCommentComponent } from 'app/components/incident-list/incident-comment/incident-comment.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CompactIncidentComponent } from 'app/components/incident-list/compact-incident/compact-incident.component';
import { AdminListComponent } from 'app/components/incident-list/admin-list/admin-list.component';
import { AdminCardComponent } from 'app/components/incident-list/admin-list/admin-card/admin-card.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatProgressSpinnerModule,
    ClipboardModule,
    MatSnackBarModule
  ],
  declarations: [
    DashboardComponent,
    AdminListComponent,
    IncidentListComponent,
    IncidentCardComponent,
    IncidentCommentComponent,
    CompactIncidentComponent,
    AdminCardComponent
  ]
})

export class AdminLayoutModule {}
