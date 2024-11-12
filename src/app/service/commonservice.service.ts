import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserstorageService } from './storage/userstorage.service';
// import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor(private http:HttpClient,private userstorageService:UserstorageService) { }

  addCategory(category:any): Observable<any> {
    return this.http.post("http://localhost:5050/admin/category",category);
    // return this.http.post("http://localhost:5050/admin/category",category,{headers: this.createAuthorizationHeader()});
  // return this.http.post("http://localhost:5050/admin/category",category);
  }

  // private createAuthorizationHeader(): HttpHeaders {
  //   return new HttpHeaders().set('Authorization','Bearer' + UserstorageService.getToken());
  // }

  getAllCategory(): Observable<any> {
    return this.http.get("http://localhost:5050/admin/get_all_category");
  }

  addProduct(product:any): Observable<any> {
    return this.http.post("http://localhost:5050/product/add_products",product);
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

  // signupUser(user:User) {
  //    return this.http.post("http://localhost:5050/users/signup_user",user);
  // }

  // loginUser(userEmailId:string,password:string):Observable<User> {

  //   const headers = new HttpHeaders({
  //     'content-type': 'application/x-www-form-urlencoded'
  //   });

  //   const body = new URLSearchParams();
  //   body.set('userEmailId',userEmailId);
  //   body.set('password',password);

  //   return this.http.post<User>("http://localhost:5050/users/login_user",body.toString(),{ headers});
  // }

  // private userData! : User;

  // setUserdata(user:User) {
  //   this.userData = user;
  // }

  // getUserData():User {
  //   return this.userData;
  // }

  // updateUser(user:User) {
  //   return this.http.put("http://localhost:5050/users/update_user/"+user.userId,user);
  // }

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
}
