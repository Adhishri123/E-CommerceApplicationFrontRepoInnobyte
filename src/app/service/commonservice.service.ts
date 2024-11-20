import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserstorageService } from './storage/userstorage.service';

// const TOKEN = 'ecom-token';
// const USER = 'ecom-user';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor(private http:HttpClient,private userstorageService:UserstorageService) { }

  addCategory(category:any): Observable<any> {
    return this.http.post("http://localhost:5050/admin/category",category);
  }

  getAllCategory(): Observable<any> {
    return this.http.get("http://localhost:5050/admin/get_all_category");
  }

  addProduct(productDto:any): Observable<any> {
    return this.http.post("http://localhost:5050/product/add_products",productDto);
  }

  getAllProduct(): Observable<any> {
    return this.http.get("http://localhost:5050/product/get_all_product");
  }

  getProductById(productId:any): Observable<any> {
    return this.http.get("http://localhost:5050/product/get_product_byid/"+productId);
  }

  updateProduct(productId:any,productDto:any): Observable<any> {
    return this.http.put("http://localhost:5050/product/update_product/"+productId,productDto);
  }

  getAllProductByName(name:any): Observable<any> {
    return this.http.get("http://localhost:5050/product/search/"+name);
  }

  deleteProduct(productId:any) {
    return this.http.delete("http://localhost:5050/product/delete_product/"+productId);
  }

  getAllProductForUser(): Observable<any> {
    return this.http.get("http://localhost:5050/product/get_all_product_foruser");
  }

  getAllProductByNameForUser(name:any): Observable<any> {
    return this.http.get("http://localhost:5050/product/search_foruser/"+name);
  }

  addToCart(productId:any): Observable<any> {
    const cartDto = {
      productId : productId,
      userId : UserstorageService.getUserId()
    }
    return this.http.post("http://localhost:5050/orders/add_to_cart",cartDto);
  }

  getCartByUserId(): Observable<any> {
    const userId = UserstorageService.getUserId()
    return this.http.get("http://localhost:5050/orders/get_in_cart/"+userId);
  }

  increaseCartItemQuantity(productId:any): Observable<any> {
    const cartDto = {
      productId : productId,
      userId : UserstorageService.getUserId()
    }
    return this.http.post("http://localhost:5050/orders/increase_cartitem",cartDto);
  }

  decreaseCartItemQuantity(productId:any): Observable<any> {
    const cartDto = {
      productId : productId,
      userId : UserstorageService.getUserId()
    }
    return this.http.post("http://localhost:5050/orders/decrease_cartitem",cartDto);
  }

  placeOrder(orderDto:any): Observable<any> {
    orderDto.userId = UserstorageService.getUserId()
    return this.http.post("http://localhost:5050/orders/place_order",orderDto)
  }

  getPlacedOrders(): Observable<any> {
    return this.http.get("http://localhost:5050/orders/place_order_foradmin");
  }

  changeOrderStatus(orderId:number,status:string): Observable<any> {
    return this.http.get("http://localhost:5050/orders/change_order_status/"+orderId+status);
  }

  getOrderByUserId(): Observable<any> {
    const userId = UserstorageService.getUserId()
    return this.http.get("http://localhost:5050/orders/get_myOrders/"+userId);
  }

  addProductToWishlist(wishlistDto:any): Observable<any> {
    return this.http.post("http://localhost:5050/product/add_product_towishlist",wishlistDto);
  }

  signupUser(signupRequest:any) : Observable<any> {
    return this.http.post("http://localhost:5050/users/sign-up",signupRequest);
  }

  loginUser(username:string,password:string):any {
    const headers = new HttpHeaders().set('Content-type','application/json');
    const body = {username,password};
    return this.http.post("http://localhost:5050/users/authenticate",body,{headers,observe:'response'}).pipe(
      map((res) => {
        const token = res.headers.get('authorization').substring(7);
        const user = res.body;
        if(token && user) {
          this.userstorageService.saveToken(token);
          this.userstorageService.saveUser(user);
          return true;
        }
        return false;
      })
    );
  }

  getUserProfile(): Observable<any> {
    return this.http.get<any>("http://localhost:5050/users/profile", { headers:this.createAuthorizationHeader(), });
  }
  
  // getUserProfile(): Observable<any> {
  //   const token = localStorage.getItem(TOKEN);
    
  //   if (token) {
  //     return this.http.get<any>("http://localhost:5050/users/profile", {
  //       headers: { 'Authorization': `Bearer${token}` },
  //     });
  //   }
  //    else {
  //     return new Observable(observer => {
  //       const user = localStorage.getItem(USER);
  //       if (user) {
  //         observer.next(JSON.parse(user));
  //       } else {
  //         observer.error('No user data found');
  //       }
  //     });
  //   }
  // }

  private createAuthorizationHeader(): HttpHeaders {
      return new HttpHeaders().set('Authorization','Bearer'+UserstorageService.getToken())
    }
}
