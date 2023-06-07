import {GastronomicCategory} from "../category/gastronomic-category";

export class RepresentativeProduct {
  name: string;
  brand: string;
  category: GastronomicCategory;

  constructor(
    name: string,
    brand: string,
    category: GastronomicCategory
  ) {
    this.name = name;
    this.brand = brand
    this.category = category;
  }
}
