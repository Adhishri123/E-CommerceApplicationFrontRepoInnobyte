import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetuserprofileComponent } from './getuserprofile/getuserprofile.component';
import { AddproducttocartComponent } from './addproducttocart/addproducttocart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { MyordersComponent } from './myorders/myorders.component';

const routes: Routes = [
  { path:"dashboard", component:DashboardComponent},
  { path:"viewprofile", component:GetuserprofileComponent},
  { path:"cart", component:AddproducttocartComponent},
  { path:"wishlistproduct", component:WishlistComponent},
  { path:"placeorder", component:PlaceorderComponent},
  { path:"my-orders", component:MyordersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
