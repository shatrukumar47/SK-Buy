import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from '../app.interfaces';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css'],
})
export class ProductDetailsPageComponent implements OnInit {
  product: any = {
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
  loading:boolean = false;
  constructor(private activeRoute: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    let id: any = this.activeRoute.snapshot.paramMap.get('id');
    id = parseInt(id);
    this.loading = true;
    this.http.get(`https://fakestoreapi.com/products/${id}`).subscribe((res)=>{
      this.product = res;
      this.loading = false;
    })
  }

  handleWishlist(){
    let wishlistData: any = localStorage.getItem('wishlist') || [];
    if (wishlistData.length === 0) {
      wishlistData.unshift(this.product);
      alert('Added into Wishlist🧡');
      localStorage.setItem('wishlist', JSON.stringify(wishlistData));
    } else {
      wishlistData = JSON.parse(wishlistData);
      if (this.checkDuplicate(wishlistData, this.product)) {
        alert('⚠ Already added!!');
      } else {
        wishlistData.unshift(this.product);
        alert('Added into Wishlist🧡');
        localStorage.setItem('wishlist', JSON.stringify(wishlistData));
      }
    }
  }

  handleBuyNow(){
    let cartData: any = localStorage.getItem('cart') || [];
    if (cartData.length === 0) {
      cartData.unshift({...this.product, quantity:1});
      alert('Added into Cart🛒');
      localStorage.setItem('cart', JSON.stringify(cartData));
    } else {
      cartData = JSON.parse(cartData);
      if (this.checkDuplicate(cartData, this.product)) {
        alert('⚠ Already added!!');
      } else {
        cartData.unshift({...this.product, quantity:1});
        alert('Added into Cart🛒');
        localStorage.setItem('cart', JSON.stringify(cartData));
      }
    }
    this.router.navigate(["cart"])
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
