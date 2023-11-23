import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent {
  address:string =  "";
  pincode:number | string =  "";
  cardholder:string =  "";
  cardNumber:number | string =  "";
  cardType:string = "";
  expiry_date:string =  "";
  cvv:number | string = "";

  constructor(private router: Router) {}

  onSubmit(){
    if(this.address && this.pincode && this.cardNumber && this.cardholder && this.cardType && this.expiry_date && this.cvv){
      let payment_details = {
        id: Math.floor(Math.random()*1000),
        address: this.address,
        pincode: this.pincode,
        cardholder: this.cardholder,
        cardNumber: this.cardNumber,
        cardType: this.cardType,
        expiry_date: this.expiry_date,
        cvv: this.cvv
      }
      console.log(payment_details)
      alert("Your order will be delivered soon. Thank You")
      this.router.navigate(["/"])
    }else{
      alert("Fill all the details!!");
    }
  }
}
