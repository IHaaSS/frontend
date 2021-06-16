import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { WizardComponent } from 'app/wizard/wizard.component';
import { IncidentListComponent } from 'app/incident-list/incident-list.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: IncidentListComponent },
    { path: 'wizard',         component: WizardComponent }
];
