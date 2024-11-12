import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../../../service/commonservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../model/user';

@Component({
  selector: 'app-getuserprofile',
  templateUrl: './getuserprofile.component.html',
  styleUrl: './getuserprofile.component.css'
})
export class GetuserprofileComponent implements OnInit{

  // user!: User;

  constructor(private http:CommonserviceService,private router:Router) { }

  ngOnInit(): void {
  //  this.user = this.http.getUserData();
  }

  // onEditUserData(userData:User) {
  //    let user_json = JSON.stringify(userData);
  //    this.router.navigateByUrl('/customer/edit/'+user_json);
  // }

  // onClick() {
  //   this.router.navigateByUrl('dash');
  // }
}
