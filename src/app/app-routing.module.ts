import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './template/about/about.component';
import { LoginComponent } from './template/login/login.component';
import { SignupComponent } from './template/signup/signup.component';

const routes: Routes = [
  { path:"", component:LoginComponent},
  { path:"about", component:AboutComponent },
  { path:"login", component:LoginComponent},
  { path:"signup", component:SignupComponent},
  {
    path:"admin", loadChildren:() => import('./module/admin/admin.module').then(file => file.AdminModule)
  },
  {
    path:"customer", loadChildren:() => import('./module/customer/customer.module').then(file => file.CustomerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
