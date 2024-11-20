import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../../../service/commonservice.service';
import { FormBuilder } from '@angular/forms';
import { UserstorageService } from '../../../service/storage/userstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproducttocart',
  templateUrl: './addproducttocart.component.html',
  styleUrl: './addproducttocart.component.css'
})
export class AddproducttocartComponent implements OnInit {

  constructor(private http:CommonserviceService,private router:Router) { }

  cartItems : any[] = [];
  order : any = {};

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    console.log("get cart items")
      this.http.getCartByUserId().subscribe(
        (response) => {
          this.cartItems = response.orderItems;  // Assuming response has `orderItems`
          this.order = response;  // The whole order details (including totalAmount, etc.)
        }
      );   
  }

  increaseQuantity(productId:any) {
    this.http.increaseCartItemQuantity(productId).subscribe(
      res => {
        alert("Product Quantity increased...!");
        this.getCart();
      }
    );
  }

  decreaseQuantity(productId:any) {
    this.http.decreaseCartItemQuantity(productId).subscribe(
      res => {
        alert("Product Quantity decreased...!");
        this.getCart();
      }
    );
  }

  placeOrder() {
    this.router.navigateByUrl("/customer/placeorder");
    
  }
}
