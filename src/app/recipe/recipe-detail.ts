import {GastronomicCultureDetail} from "src/app/culture/gastronomic-culture-detail";
import {Recipe} from "./recipe";
import {RestaurantDetail} from "../restaurant/restaurant-detail";
import {DishMultimedia} from "./dish-multimedia";

export class RecipeDetail extends Recipe {
  restaurants: Array<RestaurantDetail> = [];
  urls: Array<DishMultimedia> = [];

  constructor(id: number,
              name: string,
              description: string,
              instructions: string,
              culture: GastronomicCultureDetail,
              restaurants: Array<RestaurantDetail>,
              urls: Array<DishMultimedia>) {
    super(id, name, description, instructions, culture);
    this.restaurants = restaurants;
    this.urls = urls;
  }
}
