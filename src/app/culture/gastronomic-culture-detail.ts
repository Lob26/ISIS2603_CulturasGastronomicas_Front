import {GastronomicCulture} from "./gastronomic-culture";
import {Recipe} from "../recipe/recipe";
import {GastronomicCategory} from "../category/gastronomic-category";
import {CountryDetail} from "./country-detail";

export class GastronomicCultureDetail extends GastronomicCulture {
  recipes: Array<Recipe> = [];
  categories: Array<GastronomicCategory> = [];
  countries: Array<CountryDetail> = [];

  constructor(id: number,
              name: string,
              description: string,
              image: string,
              recipes: Array<Recipe>,
              categories: Array<GastronomicCategory>,
              countries: Array<CountryDetail>) {
    super(id, name, description, image);
    this.recipes = recipes;
    this.categories = categories;
    this.countries = countries;
  }
}
