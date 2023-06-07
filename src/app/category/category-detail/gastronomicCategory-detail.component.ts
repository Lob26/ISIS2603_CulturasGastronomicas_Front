import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../category.service';
import {GastronomicCategoryDetail} from '../gastronomic-category-detail';

@Component({
  selector: 'app-category-detail',
  templateUrl: './gastronomicCategory-detail.component.html',
  styleUrls: ['./gastronomicCategory-detail.component.css']
})
export class GastronomicCategoryDetailComponent implements OnInit {

  categoryId!: string;
  @Input() categoryDetail!: GastronomicCategoryDetail;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService) {
  }

  getCategory() {
    this.categoryService.getCategory(this.categoryId).subscribe(category => {
      this.categoryDetail = category;
    })
  }

  ngOnInit() {
    if (this.categoryDetail === undefined) {
      this.categoryId = this.route.snapshot.paramMap.get('id')!
      if (this.categoryId) {
        this.getCategory();
      }
    }
  }

}
