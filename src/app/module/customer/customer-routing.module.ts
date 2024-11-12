import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistingComponent } from './productlisting/productlisting.component';
import { GetuserprofileComponent } from './getuserprofile/getuserprofile.component';
import { AddproducttocartComponent } from './addproducttocart/addproducttocart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
// import { SignupComponent } from '../../template/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path:"dashboard", component:DashboardComponent},
  { path:"viewprofile", component:GetuserprofileComponent},
  { path:"productbrowes", component:ProductlistingComponent},
  { path:"addcart", component:AddproducttocartComponent},
  { path:"wishlistproduct", component:WishlistComponent}
  // { path:"edit/:userid", component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
