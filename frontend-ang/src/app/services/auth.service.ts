import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public users: any = {
    admin: {password: '1234', roles: ['STUDENT', 'ADMIN']},
    user1: {password: '1234', roles: ['STUDENT']},
    amal: {password: '1234', roles: ['STUDENT']},
  }

  public username:any;
  public isAuthenfiticated:boolean=false;
  public roles:string[]=[];

  constructor(private router :Router) {
  }

  public login(username: string, password: string): boolean {
    if (this.users [username] && this.users [username] ['password'] == password) {
      this.username=username;
      this.isAuthenfiticated=true;
      this.roles=this.users[username]['roles'];
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.isAuthenfiticated=false;
    this.roles=[];
    this.username=undefined;
    this.router.navigateByUrl('/login')
  }
}
