import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonserviceService } from '../../service/commonservice.service';
import { ActivatedRoute, Router } from '@angular/router';
// import  Swal  from 'sweetalert2';
// import { User } from '../../model/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  constructor(private fb:FormBuilder,private http:CommonserviceService, private router:Router,private activatedroute:ActivatedRoute) {}
  
  signupform! : FormGroup;

  // flag:boolean=false;

  ngOnInit(): void {
    this.signupform=this.fb.group({
      id:[0],
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
      address:['',[Validators.required]],
    })
    // this.getEditUserData();
  }

  // getEditUserData() {
  //   this.activatedroute.paramMap.subscribe(
  //     param => {
  //       let userjson = param.get('userid');
  //       if(userjson!=null) {
  //         let u:User = JSON.parse(userjson);
  //         this.signupform.patchValue(u);
  //         this.flag=true;
  //       }
  //     }
  //   );
  // }

  onSubmit() {
    // if(this.flag) {
    //   this.http.updateUser(this.signupform.value).subscribe();
    //   alert('Your Data Updated Successfully...!')
    // }else {
    //   console.log(this.signupform.value,'You are signup successfully...!');
    // Swal.fire ({
    //   position: 'top',
    //   title: 'Success!',
    //   text: 'Your registration was successful.',
    //   icon: 'success',
    //   confirmButtonText: 'Okay',
    //   showConfirmButton: false,
    //   timer: 2000
    // })
    //   this.http.signupUser(this.signupform.value).subscribe(
    //     (response) => {
    //        this.router.navigateByUrl("dash/login");
    //     }
    //   );
    // }
    this.http.signupUser(this.signupform.value).subscribe(
      (response) => {
        alert('Your registration was successful.');
        this.router.navigateByUrl("login");
      }
    );
  }

  onLogin() {
    this.router.navigateByUrl("login");
  }
}
