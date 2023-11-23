import { Component, Input } from '@angular/core';
import { Product } from '../app.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css'],
})
export class CardProductComponent {
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

  constructor(private router: Router) {}

  //image click function
  viewDetails() {
    this.router.navigate(['/product', this.item.id]);
  }

  //handleWishlistBtn
  handleWishlist() {
    let wishlistData: any = localStorage.getItem('wishlist') || [];
    if (wishlistData.length === 0) {
      wishlistData.unshift(this.item);
      alert('Added into Wishlist🧡');
      localStorage.setItem('wishlist', JSON.stringify(wishlistData));
    } else {
      wishlistData = JSON.parse(wishlistData);
      if (this.checkDuplicate(wishlistData, this.item)) {
        alert('⚠ Already added!!');
      } else {
        wishlistData.unshift(this.item);
        alert('Added into Wishlist🧡');
        localStorage.setItem('wishlist', JSON.stringify(wishlistData));
      }
    }
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
