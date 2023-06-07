import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RepresentativeProductListComponent} from './representative-product-list/representativeProduct-list.component';
import {
  RepresentativeProductDetailComponent
} from './representative-product-detail/representativeProduct-detail.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RepresentativeProductListComponent],
  declarations: [RepresentativeProductListComponent, RepresentativeProductDetailComponent]
})
export class RepresentativeProductModule {
}
