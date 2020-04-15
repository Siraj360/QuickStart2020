import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoute }       from './about.route';


@NgModule({
  imports: [
    CommonModule,
    AboutRoute
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule {}
