import { Component } from '@angular/core';
import { CommonserviceService } from '../../../service/commonservice.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrl: './myorders.component.css'
})
export class MyordersComponent {

  constructor(private http:CommonserviceService) { }

  myOrders:any;

  ngOnInit() {
    this.getMyOrders();
  }

  getMyOrders() {
    this.http.getOrderByUserId().subscribe(
      (res) => {
        this.myOrders = res;
      }
    );
  }
}
