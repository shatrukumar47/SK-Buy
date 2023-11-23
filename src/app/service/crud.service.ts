import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Product } from '../app.interfaces';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private api:string = "https://fakestoreapi.com/products";
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<any>(this.api);
  }
}
