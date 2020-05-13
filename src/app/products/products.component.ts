import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})

// How to incorporate forEach into below to loop through array via HTML interpolation
export class ProductsComponent implements OnInit {
  myCart: Item[] = [
    {
      pound: 0,
      product: 'product a',
      price: 10,
      quantity: 1,
      edit: 'yes',
    },
    {
      pound: 1,
      product: 'product b',
      price: 20,
      quantity: 1,
      edit: 'no',
    },
    {
      pound: 2,
      product: 'product c',
      price: 40,
      quantity: 1,
      edit: 'no',
    },
    {
      pound: 3,
      product: 'product d',
      price: 15,
      quantity: 10,
      edit: 'no',
    },
    {
      pound: 4,
      product: 'product e',
      price: 20,
      quantity: 1,
      edit: 'no',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
