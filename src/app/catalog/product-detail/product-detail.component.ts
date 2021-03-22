import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
productId:number;

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.productId = p.id;
    });
  }

}
