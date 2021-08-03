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
import { UserProfileComponent } from 'app/components/user-profile/user-profile.component';
import { IncidentListComponent } from 'app/components/incident-list/incident-list.component';
import { IncidentCardComponent } from 'app/components/incident-list/incident-card/incident-card.component';
import { IncidentCommentComponent } from 'app/components/incident-list/incident-comment/incident-comment.component';

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
    MatListModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    IncidentListComponent,
    IncidentCardComponent,
    IncidentCommentComponent
  ]
})

export class AdminLayoutModule {}
