import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';


import { ProductComponent } from './product.component';
import { ProductRoute }       from './product.route';
import { ProductListComponent } from './component/product-list';
import { ProductItemComponent } from './component/product-item';


@NgModule({
  imports: [
    CommonModule,
    ProductRoute
   ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductItemComponent
  ]
})
export class ProductModule {}
