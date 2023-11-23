import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string = "";
  password: string = "";
  constructor(private auth: AuthService){}

  handleLogin(){
    if(this.email && this.password){
      this.auth.login(this.email, this.password)
    }
  }
}
