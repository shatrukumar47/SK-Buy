import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { RegistrationForm } from '../app.interfaces';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  authValue: any = localStorage.getItem("isAuth") || false;
  private isAuthenticated = new BehaviorSubject<boolean>(this.authValue);
  constructor(private http: HttpClient, private router: Router) { }


  isLoggedIn():Observable<boolean>{
    return this.isAuthenticated.asObservable();
  }

  registeration(user: RegistrationForm): void{
    let users:any = localStorage.getItem("users");
    let parsedUsers = JSON.parse(users) || [];
    parsedUsers.push(user);
    console.log(user)
    localStorage.setItem("users", JSON.stringify(parsedUsers));
  }

  login(email:string, password: string): void{
    let users:any = localStorage.getItem("users") || [];
    let parsedUsers = JSON.parse(users)
    let user = parsedUsers.find((item: any)=> item.email === email)
    if(!user){
      alert("Invalid credentials !!");
    }else{
      if(user.password !== password){
        alert("Wrong Password !!");
      }else{
        localStorage.setItem("isAuth", JSON.stringify(true));
        localStorage.setItem("loggedin_user", JSON.stringify({userId: user.id, username: user.username, avatar: user.image, email: user.email}));
        this.isAuthenticated.next(true);
        this.router.navigate([""])
      }
    } 
  }

  logout(){
    localStorage.removeItem("isAuth");
    localStorage.removeItem("loggedin_user");
    this.isAuthenticated.next(false);
  }
}
