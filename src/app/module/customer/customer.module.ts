import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { ProductlistingComponent } from './productlisting/productlisting.component';
import { GetuserprofileComponent } from './getuserprofile/getuserprofile.component';
import { AddproducttocartComponent } from './addproducttocart/addproducttocart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    ProductlistingComponent,
    GetuserprofileComponent,
    AddproducttocartComponent,
    WishlistComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
