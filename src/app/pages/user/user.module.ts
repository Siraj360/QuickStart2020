import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { UserComponent } from './user.component';
import {UserRoute }       from './user.route';
import { UserCardComponent } from './user-card/user-card.component';


@NgModule({
  imports: [
    CommonModule,
    UserRoute
  ],
  declarations: [
    UserComponent, UserCardComponent
  ]
})
export class UserModule {}
