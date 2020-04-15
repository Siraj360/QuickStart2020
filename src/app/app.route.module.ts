import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }  from './home';


const appRoutes: Routes = [
    { path: '',  pathMatch: 'full', component: HomeComponent, data: { name: "entry"}},
    { path: 'home', component: HomeComponent, data: { name: "home"}},
    { path: 'about', loadChildren: () => import( './pages/about/about.module').then(m => m.AboutModule) },
    { path: 'product', loadChildren: () => import( './pages/product/product.module').then(m => m.ProductModule) },
    { path: 'employee', loadChildren: () => import( './pages/user/user.module').then(m => m.UserModule) },
    { path: '**', redirectTo: '', data: { name: "redirect to entry"}}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class AppRouteModule {}
