import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonserviceService } from '../../service/commonservice.service';
import { Router } from '@angular/router';
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
    const username = this.loginform.get('email')!.value;
    const password = this.loginform.get('password')!.value;
    this.http.loginUser(username,password).subscribe(
      (res:any) => {
        console.log('Login Successful',res); 
        // Store the token and user data
      // localStorage.setItem('token', res.token);
      // localStorage.setItem('user', JSON.stringify(res.user));
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
