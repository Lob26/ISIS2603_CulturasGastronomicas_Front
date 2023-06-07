import {GastronomicCultureDetail} from "../culture/gastronomic-culture-detail";

export class Recipe {
  id: number;
  name: string;
  description: string;
  instructions: string;
  culture?: GastronomicCultureDetail;

  constructor(id: number,
              name: string,
              description: string,
              instructions: string,
              culture?: GastronomicCultureDetail) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.instructions = instructions;
    this.culture = culture;
  }
}
