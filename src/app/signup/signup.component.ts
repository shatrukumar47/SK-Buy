import { Component, ViewChild } from '@angular/core';
import { RegistrationForm } from '../app.interfaces';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  @ViewChild('userForm') userForm:any;

  user: RegistrationForm = {
    id:1,
    image: "",
    username: "",
    email: "",
    password: ""
  }

  constructor(private router: Router, private auth: AuthService){}

  handleSubmit(event: NgForm){
    if(event.valid){
      if (event.value.password !== event.value.confirm_password) {
        alert(
          '⚠ Password Mismatch: Please make sure to enter the same password in both fields.'
        );
      }else{
        this.user = {
          id: Math.floor(Math.random() * 1000),
          image: "https://img.freepik.com/premium-vector/business-man-face-portrait-icon_48369-5527.jpg?size=626&ext=jpg&uid=R109767327&ga=GA1.1.1257944628.1683352118&semt=ais",
          username: event.value.username,
          email: event.value.email,
          password: event.value.password,
        };
        console.log(this.user)
        this.auth.registeration(this.user);
        this.router.navigate(["/login"]);
      }
    }
  }
}
