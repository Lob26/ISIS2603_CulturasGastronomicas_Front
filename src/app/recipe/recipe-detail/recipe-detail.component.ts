import {Component, OnInit} from '@angular/core';
import {RecipeDetail} from "../recipe-detail";
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css', '../../details.css']
})
export class RecipeDetailComponent implements OnInit {
  id!: string;
  recipe!: RecipeDetail

  constructor(private route: ActivatedRoute,
              private service: RecipeService) {
  }

  ngOnInit(): void {
    if (this.recipe === undefined) {
      this.id = this.route.snapshot.queryParamMap.get('id')!
      if (this.id) {
        this.service.getRecipe(this.id).subscribe(recipe => this.recipe = recipe);
      }
    }
  }

  handle(i: number) {
    this.recipe.urls[i].url = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
  }
}
