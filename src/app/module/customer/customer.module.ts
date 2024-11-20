import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { ProductlistingComponent } from './productlisting/productlisting.component';
import { GetuserprofileComponent } from './getuserprofile/getuserprofile.component';
import { AddproducttocartComponent } from './addproducttocart/addproducttocart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { MyordersComponent } from './myorders/myorders.component';


@NgModule({
  declarations: [
    ProductlistingComponent,
    GetuserprofileComponent,
    AddproducttocartComponent,
    WishlistComponent,
    DashboardComponent,
    PlaceorderComponent,
    MyordersComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,   
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class CustomerModule { }
