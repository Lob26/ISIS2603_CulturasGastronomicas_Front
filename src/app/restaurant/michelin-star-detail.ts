import {RestaurantDetail} from "./restaurant-detail";

export class MichelinStarDetail {
  id: number;
  acquired: Date;
  restaurant?: RestaurantDetail;

  constructor(id: number,
              acquired: Date,
              restaurant?: RestaurantDetail) {
    this.id = id;
    this.acquired = acquired;
    this.restaurant = restaurant;
  }
}
