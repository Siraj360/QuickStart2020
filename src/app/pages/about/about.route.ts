import { Routes, RouterModule }  from '@angular/router';

import { AboutComponent } from './about.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  }
];

export const AboutRoute: ModuleWithProviders = RouterModule.forChild(routes);
