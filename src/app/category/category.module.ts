import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GastronomicCategoryDetailComponent} from './category-detail/gastronomicCategory-detail.component';
import {GastronomicCategoryListComponent} from './category-list/gastronomicCategory-list.component';
import {GastronomicCategoryCreateComponent} from "./category-create/gastronomicCategory-create.component";


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [GastronomicCategoryListComponent],
  declarations: [GastronomicCategoryListComponent, GastronomicCategoryDetailComponent, GastronomicCategoryCreateComponent]
})
export class CategoryModule {
}
