import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RepresentativeProductDetail} from '../representative-product-detail';
import {RepresentativeProductService} from '../representative-product.service';

@Component({
  selector: 'app-representative-product-detail',
  templateUrl: './representativeProduct-detail.component.html',
  styleUrls: ['./representativeProduct-detail.component.css']
})
export class RepresentativeProductDetailComponent implements OnInit {

  productId!: string;
  @Input() productDetail!: RepresentativeProductDetail;

  constructor(
    private route: ActivatedRoute,
    private productService: RepresentativeProductService
  ) {
  }

  getProduct() {
    this.productService.getProduct(this.productId).subscribe(product => {
      this.productDetail = product;
    })
  }

  ngOnInit() {
    if (this.productDetail === undefined) {
      this.productId = this.route.snapshot.paramMap.get('id')!
      if (this.productId) {
        this.getProduct();
      }
    }
  }
}
