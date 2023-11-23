import { Component, Input } from '@angular/core';
import { Product } from '../app.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-wishlist',
  templateUrl: './card-wishlist.component.html',
  styleUrls: ['./card-wishlist.component.css']
})
export class CardWishlistComponent {
  @Input() item: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0,
    },
  };

  @Input() handleRemoveWishlist: Function = ()=> void{};

  constructor(private router: Router){}

  //handle Image
  viewDetails(){
    this.router.navigate(["/product", this.item.id])
  }

   //handleAddToCartBtn
   handleAddToCart() {
    let cartData: any = localStorage.getItem('cart') || [];
    if (cartData.length === 0) {
      cartData.unshift({...this.item, quantity:1});
      alert('Added into Cart🛒');
      localStorage.setItem('cart', JSON.stringify(cartData));
    } else {
      cartData = JSON.parse(cartData);
      if (this.checkDuplicate(cartData, this.item)) {
        alert('⚠ Already added!!');
      } else {
        cartData.unshift({...this.item, quantity:1});
        alert('Added into Cart🛒');
        localStorage.setItem('cart', JSON.stringify(cartData));
      }
    }
  }

  //check Duplication
  checkDuplicate(data: Product[], product: Product): boolean {
    for (let item of data) {
      if (item.id === product.id) {
        return true;
      }
    }
    return false;
  }
}
