import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../../../service/commonservice.service';
import { Product } from '../../../model/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  constructor(private http:CommonserviceService,private fb:FormBuilder) { }

  products:any[];

  searchProductForm!:FormGroup;

  ngOnInit(): void {
    this.http.getAllProduct().subscribe(
      (data:any[]) => {
        this.products = data;
      }
    );
    this.searchProductForm = this.fb.group({
      title:[null,[Validators.required]]
    });
  }

  submitForm() {
    this.products = [];
    const title = this.searchProductForm.get('title')!.value;
    this.http.getAllProductByName(title).subscribe(
      (data:any[]) => {
        this.products = data;
      }
    );
  }

  deleteProducts(productId:any) {
    this.http.deleteProduct(productId).subscribe();
      alert("Product Deleted Successfully...!");
      window.location.reload();
  }
}
