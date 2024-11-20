import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonserviceService } from '../../../service/commonservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrl: './placeorder.component.css'
})
export class PlaceorderComponent implements OnInit {

  constructor(private fb:FormBuilder,private http:CommonserviceService,private router:Router) { }

  orderForm! : FormGroup;

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      address:[null,[Validators.required]],
      orderDescription:[null],
      createdAt:[null,[Validators.required]],
      
    });
  }

  placeOrder() {
    this.http.placeOrder(this.orderForm.value).subscribe(
      (res) => {
        if(res.id != null) {
          alert("Order placed successfully...!");
          this.router.navigateByUrl("/customer/my-orders");
          this.closeForm();
        }
        else {
          alert("Something went wrong...!");
        }
      }
    );
  }

  closeForm() {
    this.router.navigateByUrl("/customer/cart");
  }
}
