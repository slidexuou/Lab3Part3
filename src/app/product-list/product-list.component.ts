import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[];
  constructor() { 
    this.products = [];
        this.products.push({
        name: 'ส้มโอ',
        price: 990
});
        this.products.push({
        name: 'แตงโม',
        price: 1000
});
        this.products.push({
        name: 'มะพร้าวนํ้าหอม',
        price: 500
});
        this.products.push({
          name:'มะม่วง',
          price: 800
        });
  }

  ngOnInit(): void {
  }

  selectedProduct(product: Product) {
    alert(`Product ${product.name} `);
    }
}
