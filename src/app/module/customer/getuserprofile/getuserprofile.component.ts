import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../../../service/commonservice.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { User } from '../../../model/user';
// import { UserstorageService } from '../../../service/storage/userstorage.service';

@Component({
  selector: 'app-getuserprofile',
  templateUrl: './getuserprofile.component.html',
  styleUrl: './getuserprofile.component.css'
})
export class GetuserprofileComponent implements OnInit{

  user: any = {};

  constructor(private http:CommonserviceService,private router:Router) { 
    // console.log('CustomerProfileComponent constructor called');
  }

  ngOnInit(): void {
    this.http.getUserProfile().subscribe(
      (res) => {
        this.user = res;
      }
    );
  }

  // onEditUserData(userData:User) {
  // //    let user_json = JSON.stringify(userData);
  // //    this.router.navigateByUrl('/customer/edit/'+user_json);
  // }

  onClick() {
    this.router.navigateByUrl('customer/dashboard');
  }
}
