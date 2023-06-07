import {GastronomicCategory} from "../category/gastronomic-category";
import {RepresentativeProduct} from "./representative-product";

export class RepresentativeProductDetail extends RepresentativeProduct {

  constructor(
    name: string,
    brand: string,
    category: GastronomicCategory
  ) {
    super(name, brand, category);
  }
}
