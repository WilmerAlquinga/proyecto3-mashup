import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

const apiUrl = environment.apiBaseUrl;
@Injectable({
  providedIn: 'root'
})
export class 
ProductService {
  // private baseUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl);
  }
}
