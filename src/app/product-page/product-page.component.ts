import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Product } from '../app.interfaces';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  products: Product[] = [];
  copyOfProducts:Product[] = [];
  loading: boolean = false;
  sortingOrder: string = '';
  searchInput: string = '';
  categoryValue: string = '';
  constructor(private crud: CrudService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.crud.getProducts().subscribe((res) => {
      this.products = res;
      this.copyOfProducts = res;
      this.loading = false;
    });
  }

  //handleSorting
  handleSortBy() {
    this.loading = true;
    if (this.sortingOrder === 'asc') {
      this.loading = false;
      this.products = this.products.sort((a, b) => a.price - b.price);
    } else if (this.sortingOrder === 'desc') {
      this.loading = false;
      this.products = this.products.sort((a, b) => b.price - a.price);
    } else {
      this.loading = true;
      this.crud.getProducts().subscribe((res) => {
        this.products = res;
        this.loading = false;
      });
    }
    this.loading = false;
  }

  //handleSearch
  handleSearch() {
    this.loading = true;
    if (this.searchInput) {
      this.products = this.products.filter((item: Product): any => {
        if (item.title.toLowerCase().includes(this.searchInput.toLowerCase())) {
          return item;
        }
      });
      this.loading = false;
    } else {
      this.loading = true;
      this.crud.getProducts().subscribe((res) => {
        this.products = res;
        this.loading = false;
      });
    }
  }

  //handleCategory
  handleFilterCategory = (event: any)=> {
    this.products = this.copyOfProducts;
    this.categoryValue = event.target.value;
    this.loading = true;
    if (this.categoryValue) {
      console.log(this.categoryValue)
      this.products = this.products.filter((item): any => {
        if (item.category === (this.categoryValue)) {
          return item;
        }
      });
      console.log(this.products)
      this.loading = false;
    }else{
      this.loading = true;
      this.crud.getProducts().subscribe((res) => {
        this.products = res;
        this.loading = false;
      });
    }
  }

  //handleRating
  handleRatingCateogry = (event: any)=>{
    const rating = event.target.value;
    const ratingArr = rating.split(",").map(Number);
    console.log(ratingArr)
    this.products = this.copyOfProducts;
    this.loading = true;
    this.products = this.products.filter((item): any => {
      if ((item.rating.rate >= ratingArr[0]) && (item.rating.rate <= ratingArr[1])) {
        return item;
      }
    });
    this.loading = false;
  }
}
