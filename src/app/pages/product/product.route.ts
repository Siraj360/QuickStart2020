import { Routes, RouterModule }  from '@angular/router';

import { ProductComponent } from './product.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  }
];

export const ProductRoute: ModuleWithProviders = RouterModule.forChild(routes);
