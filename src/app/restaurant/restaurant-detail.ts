import {Restaurant} from "./restaurant";
import {Recipe} from "../recipe/recipe";
import {MichelinStarDetail} from "./michelin-star-detail";
import {CountryDetail} from "../culture/country-detail";

export class RestaurantDetail extends Restaurant {
  country: CountryDetail;
  recipes: Array<Recipe> = [];
  stars: Array<MichelinStarDetail> = [];
  imagen: string;


  constructor(id: number,
              name: string,
              city: string,
              contact: string,
              country: CountryDetail,
              recipes: Array<Recipe>,
              michelinStars: Array<MichelinStarDetail>,
              imagen?: string) {
    super(id, name, city, contact);
    this.country = country;
    this.recipes = recipes;
    this.stars = michelinStars;
    this.imagen = imagen ? imagen : "ejemplo.com/hola_mundo";
  }
}
