import {GastronomicCulture} from "../culture/gastronomic-culture";
import {RepresentativeProduct} from "../representative-product/representative-product";
import {GastronomicCategory} from "./gastronomic-category";

export class GastronomicCategoryDetail extends GastronomicCategory {
  products: Array<RepresentativeProduct> = [];

  constructor(
    name: string,
    image: string,
    culture: GastronomicCulture,
    products: Array<RepresentativeProduct>
  ) {
    super(name, image, culture);
    this.products = products;
  }
}
