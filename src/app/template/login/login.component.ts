import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonserviceService } from '../../service/commonservice.service';
import { Router } from '@angular/router';
import { User } from '../../model/user';
import { UserstorageService } from '../../service/storage/userstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  constructor(private fb:FormBuilder,private http:CommonserviceService,private router:Router) { }

  loginform!:FormGroup;

  // errorMessage: string = '';

  ngOnInit(): void {
    this.loginform = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
    })
  }

  onSubmit() {
    // if(this.loginform.valid) {
    //   const { userEmailId,password} = this.loginform.value;
    //   this.http.loginUser(userEmailId,password).subscribe(
    //     (user:User) => {
    //       console.log('Login Successful',user);
    //       this.http.setUserdata(user);
    //       localStorage.setItem('Current User', JSON.stringify(user));
    //       if(this.loginform.controls['userEmailId'].value==='admin1@gmail.com' && this.loginform.controls['password'].value==='admin@1') {
    //         this.router.navigateByUrl("admindash");
    //       }else {
    //         this.router.navigateByUrl("customerdash");
    //       }
    //     },
    //     error => {
    //       console.error('Login failed',error);
    //       this.errorMessage = 'Invalid Email or Password';
    //     }
    //   );
    // }
    const username = this.loginform.get('email')!.value;
    const password = this.loginform.get('password')!.value;
    this.http.loginUser(username,password).subscribe(
      (res) => {
        // alert('Your Login Successfull.');
        if(UserstorageService.isAdminLoggedin()) {
          this.router.navigateByUrl('admin/dashboard');
        }else if(UserstorageService.isCustomerLoggedin()) {
          this.router.navigateByUrl('customer/dashboard');
        }
      }
    );
  }

  onRegister() {
    this.router.navigateByUrl("signup");
  }
}
