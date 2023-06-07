import {Component, OnInit} from '@angular/core';
import {RecipeDetail} from "../recipe-detail";
import {RecipeService} from "../recipe.service";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css', '../../details.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<RecipeDetail> = [];
  selected: boolean = false;
  selectedRecipe!: RecipeDetail;
  p: number = 1;
  searchedRecipe: any;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe({
      next: recipes => this.recipes = recipes,
      error: e => console.error(e)
    });
  }

  onSelected(recipe: RecipeDetail): void {
    this.selected = true;
    this.selectedRecipe = recipe;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.recipes, event.previousIndex, event.currentIndex);
  }
}
