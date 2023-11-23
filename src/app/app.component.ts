import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular-HTTP-Assignment';
  isAuth: boolean = false;
  avatar: string = "";
  constructor(private router: Router, private auth: AuthService){}

  ngOnInit(): void {
    initFlowbite();
    this.auth.isLoggedIn().subscribe(res=> this.isAuth = res);
    let userDetails: any = localStorage.getItem("loggedin_user");
    let parsedUserDetails = JSON.parse(userDetails) || "";
    this.avatar = parsedUserDetails.avatar;
  }

  handleGithub(){
    window.open("https://github.com/shatrukumar47/Angular-HTTP-Services", "_blank")
  }

  handleLogoRoute(){
    this.router.navigate(["/"])
  }

  handleLogout(){
    this.auth.logout();
  }

  handleProfileIcon(){
    this.router.navigate(["/profile"])
  }
}
