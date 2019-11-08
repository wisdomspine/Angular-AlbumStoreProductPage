import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//import 'rxjs/add/operator/map';
import { Album } from './album';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _albumUrl = '../assets/album.json';
  private _productsUrl = '../assets/products.json';
  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<Album> {
   return this._http.get(this._albumUrl).pipe(map((response) => <Album>response.json()));
  }

  getProducts(): Observable<Product[]>{
    return this._http.get(this._productsUrl).pipe(map(response => <Product[]>response.json()));
  }
}
