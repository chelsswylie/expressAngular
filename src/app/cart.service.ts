import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  httpClient: any;
  constructor() {}

  getAllItems() {
    const url = 'http://localhost:4200';

    return this.httpClient.get(url);
  }
}

// Needs getAllItems() method that uses http to make a GET request to your /cart-items API
