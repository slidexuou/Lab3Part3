import { Component, ViewChild, OnInit } from '@angular/core';
import { ProductListComponent } from './catalog/product-list/product-list.component'
import { BackendService } from './backend.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Lab1Part3';

  constructor(private backendService: BackendService) {}
  @ViewChild('productList', { static: true })
  productList: ProductListComponent;

  ngOnInit(): void {
    this.productList.products = this.backendService.getProducts();
  }

}
