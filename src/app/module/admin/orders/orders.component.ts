import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../../../service/commonservice.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {

  constructor(private http:CommonserviceService) { }

  orders:any;

  ngOnInit() {
    this.getPlaceOrders();
  }

  getPlaceOrders() {
    this.http.getPlacedOrders().subscribe(
      (res) => {
        this.orders = res;
        // console.log(res);
      }
    );
  }

  changeOrderStatus(orderId:number,status:string) {
    this.http.changeOrderStatus(orderId,status).subscribe(
      (res) => {
        if(res.id !=null) {
          alert("Order status changed successfully...!");
          this.getPlaceOrders();
        }
        else {
          alert("Something went wrong!");
        }
      }
    );
  }
}
