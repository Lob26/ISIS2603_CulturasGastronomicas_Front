import {Component, OnInit} from '@angular/core';
import {RepresentativeProduct} from '../representative-product';
import {RepresentativeProductService} from '../representative-product.service';

@Component({
  selector: 'app-representative-product-list',
  templateUrl: './representativeProduct-list.component.html',
  styleUrls: ['./representativeProduct-list.component.css']
})
export class RepresentativeProductListComponent implements OnInit {


  products: Array<RepresentativeProduct> = [];
  selected: Boolean = false;
  selectedProduct!: RepresentativeProduct;
  p: number = 1;
  searchedProduct: any;

  constructor(private productService: RepresentativeProductService) {
  }

  getProducts(): void {
    this.productService.getProducts().subscribe({
      next: products => this.products = products,
      error: e => console.error(e)
    });
  }

  onSelected(product: RepresentativeProduct): void {
    this.selected = true;
    this.selectedProduct = product;
  }

  ngOnInit() {
    this.getProducts();
  }

}
