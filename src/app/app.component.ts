import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserstorageService } from './service/storage/userstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e_commerce_application';

  searchQuery: string = '';

  isCustomerLoggedin: boolean = UserstorageService.isCustomerLoggedin();
  isAdminLoggedin: boolean = UserstorageService.isAdminLoggedin();

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      this.isCustomerLoggedin = UserstorageService.isCustomerLoggedin();
      this.isAdminLoggedin = UserstorageService.isAdminLoggedin();
    });
  }

  logout() {
    UserstorageService.signout();
    this.router.navigateByUrl('login');
  }
}
