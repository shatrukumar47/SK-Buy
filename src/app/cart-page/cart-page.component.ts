import { Component, OnInit } from '@angular/core';
import { Product } from '../app.interfaces';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cartData: Product[] = [];
  totalPrice: number = 0;

  ngOnInit(): void {
    const data = localStorage.getItem("cart");
    if(data){
      this.cartData = JSON.parse(data);
    }
    this.calculateTotalPrice();
  }

  //remove cart item
  removeCartItem = (id: number)=>{
    this.cartData = this.cartData.filter((item)=> item.id !== id);
    localStorage.setItem("cart", JSON.stringify(this.cartData))
    this.calculateTotalPrice();
  }

 

  //handle Qunatity
  handleQuantity(event:any, id:number){
      let q = parseInt(event.target.value);
      this.cartData = this.cartData.map((item)=>{
        if(item.id === id){
          return {...item, quantity:q}
        }else{
          return item;
        }
      })
      localStorage.setItem("cart", JSON.stringify(this.cartData))
      this.calculateTotalPrice();
  }

   // calculate subtotal
   calculateTotalPrice(){
    this.totalPrice = 0;
    this.cartData.forEach((item)=>{
      // this.totalPrice += ((item.price)*(item.quantity))
      this.totalPrice = this.totalPrice + (item.price * (item.quantity || 1))
    })
  }
}
