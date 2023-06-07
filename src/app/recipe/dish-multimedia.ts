import {RecipeDetail} from "./recipe-detail";

export class DishMultimedia {
  url: string;
  recipe: RecipeDetail;

  constructor(url: string, recipe: RecipeDetail) {
    this.url = url;
    this.recipe = recipe;
  }
}
