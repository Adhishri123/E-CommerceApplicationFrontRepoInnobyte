import { Component } from '@angular/core';
import { CommonserviceService } from '../../../service/commonservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserstorageService } from '../../../service/storage/userstorage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  productId: number = this.activatedRoute.snapshot.params["productId"];

  constructor(private http:CommonserviceService,private fb:FormBuilder,private activatedRoute:ActivatedRoute) { }

  products:any[];

  searchProductForm!:FormGroup;

  ngOnInit(): void {
    this.http.getAllProductForUser().subscribe(
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
    this.http.getAllProductByNameForUser(title).subscribe(
      (data:any[]) => {
        this.products = data;
      }
    );
  }

  addToCarts(id:any) {
     this.http.addToCart(id).subscribe(
      res => {
        alert("Product added to cart successfully...!");
      }
     );
  }

  addToWishlist() {
    const wishlistDto = {
      productId : this.productId,
      userId : UserstorageService.getUserId()
    }
    this.http.addProductToWishlist(wishlistDto).subscribe(
      res => {
        if(res.id != null) {
          alert("Product added to wishlist successfully...!");
        }
      }
    );
  }
}
