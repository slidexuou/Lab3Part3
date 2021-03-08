import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Product } from '../product/product';
import { ProductItemComponent } from '../product-item/product-item.component'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @ViewChildren(ProductItemComponent)
  productItems: QueryList<ProductItemComponent>;

  products:Product[];
  constructor() { 
    this.products = [];
  }

  ngOnInit(): void {}

  selectedProduct(productComponent: ProductItemComponent) {
    alert(`Product ${productComponent.product.name} selected`);
    this.productItems.forEach(p => {
    p.isSelected = false;
    });
    productComponent.isSelected = true;
    }
}
