import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Product } from '../app.interfaces';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.css']
})
export class WishlistPageComponent implements OnInit {
  wishlistData: Product[] = [];
  loading:boolean = false;

  constructor(private cdRef: ChangeDetectorRef){}

  ngOnInit(): void {
    this.loading = true;
    const data = localStorage.getItem('wishlist');
    if (data) {
      this.wishlistData = JSON.parse(data);
    }
    this.loading = false;
  }

  //handle Remove button
  handleRemoveWishlist = (id: number)=>{
    const data = localStorage.getItem('wishlist');
    if(data){
      this.wishlistData = JSON.parse(data);
      this.wishlistData = this.wishlistData.filter((item) => item.id !== id);
      localStorage.setItem('wishlist', JSON.stringify(this.wishlistData));
      this.cdRef.detectChanges();
    }
  }
}
