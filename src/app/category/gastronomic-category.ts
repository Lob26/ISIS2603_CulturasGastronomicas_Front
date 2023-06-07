import {GastronomicCulture} from "../culture/gastronomic-culture";
import {RepresentativeProduct} from "../representative-product/representative-product";

export class GastronomicCategory {
  name: string;
  url: string;
  culture?: GastronomicCulture;
  products: Array<RepresentativeProduct> = [];

  constructor(
    name: string,
    image: string,
    culture?: GastronomicCulture,
    products: Array<RepresentativeProduct> = []
  ) {
    this.name = name;
    this.url = image;
    this.culture = culture;
    this.products = products
  }
}
