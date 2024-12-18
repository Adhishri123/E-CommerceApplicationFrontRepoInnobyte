import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const TOKEN = 'ecom-token';
const USER = 'ecom-user';

@Injectable({
  providedIn: 'root'
})
export class UserstorageService {

  constructor() { }

  public saveToken(token:string):void {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }

  public saveUser(user):void {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }

  static getToken():string {
    return localStorage.getItem(TOKEN);
  }

  static getUser():any {
    return JSON.parse(localStorage.getItem(USER));
  }

  static getUserId():string {
    const user = this.getUser();
    if(user == null) {
      return '';
    }
    return user.userId;
  }

  static getUserRole():string {
    const user = this.getUser();
    if(user == null) {
      return '';
    }
    return user.role;
  }

  static isAdminLoggedin():boolean {
    if(this.getToken === null) {
      return false;
    }
    const role: string =this.getUserRole();
    return role == 'ADMIN';
  }

  static isCustomerLoggedin():boolean {
    if(this.getToken === null) {
      return false;
    }
    const role: string =this.getUserRole();
    return role == 'CUSTOMER';
  }

  static signout():void {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);
  }

}
