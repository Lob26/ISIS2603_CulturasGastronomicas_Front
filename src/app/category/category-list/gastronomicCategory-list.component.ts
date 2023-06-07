import {Component, OnInit} from '@angular/core';
import {GastronomicCategory} from '../gastronomic-category';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './gastronomicCategory-list.component.html',
  styleUrls: ['./gastronomicCategory-list.component.css']
})
export class GastronomicCategoryListComponent implements OnInit {

  categories: Array<GastronomicCategory> = [];
  selected: Boolean = false;
  selectedCategory!: GastronomicCategory;
  p: number = 1;
  searchedCategory: any;

  constructor(private categoryService: CategoryService) {
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: categories => this.categories = categories,
      error: e => console.error(e)
    });
  }

  onSelected(category: GastronomicCategory): void {
    this.selected = true;
    this.selectedCategory = category;
  }

  ngOnInit() {
    this.getCategories();
  }

}
