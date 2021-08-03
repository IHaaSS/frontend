import { Routes } from '@angular/router';
import { DashboardComponent } from 'app/components/dashboard/dashboard.component';
import { IncidentListComponent } from 'app/components/incident-list/incident-list.component';
import { UserProfileComponent } from 'app/components/user-profile/user-profile.component';

import { WizardComponent } from '../../wizard/wizard.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: IncidentListComponent },
    { path: 'wizard',         component: WizardComponent }
];
