import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';
import { DeleteproductsComponent } from './deleteproducts/deleteproducts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostcategoryComponent } from './postcategory/postcategory.component';


@NgModule({
  declarations: [
    AddproductsComponent,
    UpdateproductsComponent,
    DeleteproductsComponent,
    DashboardComponent,
    PostcategoryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
