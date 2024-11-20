import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostcategoryComponent } from './postcategory/postcategory.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path:"dashboard", component:DashboardComponent},
  { path:"postcategory", component:PostcategoryComponent},
  { path:"addproducts", component:AddproductsComponent},
  { path:"addproducts/:productId", component:UpdateproductsComponent},
  { path:"updateproducts", component:UpdateproductsComponent},
  { path:"orders", component:OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
