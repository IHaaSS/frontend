import { Routes } from '@angular/router';
import { DashboardComponent } from 'app/components/dashboard/dashboard.component';
import { AdminListComponent } from 'app/components/incident-list/admin-list/admin-list.component';
import { IncidentListComponent } from 'app/components/incident-list/incident-list.component';

import { WizardComponent } from '../../wizard/wizard.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'admin',          component: AdminListComponent },
    { path: 'table-list',     component: IncidentListComponent },
    { path: 'wizard',         component: WizardComponent }
];
