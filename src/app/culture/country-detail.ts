import {GastronomicCultureDetail} from "./gastronomic-culture-detail";
import {Restaurant} from "../restaurant/restaurant";

export class CountryDetail {
  id: number;
  name: string;
  iso: string;
  cultures: Array<GastronomicCultureDetail> = [];
  restaurants: Array<Restaurant> = [];

  constructor(id: number, name: string, iso: string, cultures: Array<GastronomicCultureDetail>, restaurants: Array<Restaurant>) {
    this.id = id;
    this.name = name;
    this.iso = iso;
    this.cultures = cultures;
    this.restaurants = restaurants;
  }
}
