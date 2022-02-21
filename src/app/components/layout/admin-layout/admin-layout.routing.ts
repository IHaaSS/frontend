import { Routes } from '@angular/router';
import { AdminListComponent } from 'app/components/incident-list/admin-list/admin-list.component';
import { IncidentListComponent } from 'app/components/incident-list/incident-list.component';

import { WizardComponent } from '../../wizard/wizard.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'admin',          component: AdminListComponent },
    { path: 'table-list',     component: IncidentListComponent },
    { path: 'wizard',         component: WizardComponent }
];
