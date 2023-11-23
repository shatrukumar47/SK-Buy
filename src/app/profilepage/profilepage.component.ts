import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent implements OnInit {
  avatar: string = "";
  username: string = "";
  email: string = "";

  ngOnInit(): void {
    let userDetails: any = localStorage.getItem("loggedin_user");
    let parsedUserDetails = JSON.parse(userDetails) || "";
    this.avatar = parsedUserDetails.avatar;
    this.username = parsedUserDetails.username;
    this.email = parsedUserDetails.email;
  }
}
