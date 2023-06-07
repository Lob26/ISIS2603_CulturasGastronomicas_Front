import {Component, OnInit} from '@angular/core';
import {RestaurantDetail} from "../restaurant-detail";
import {RestaurantService} from "../restaurant.service"
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css', '../../details.css'],
})
export class RestaurantListComponent implements OnInit {
  restaurants: Array<RestaurantDetail> = [];
  selected: boolean = false;
  selectedRestaurant!: RestaurantDetail;
  p: number = 1;
  searchedRestaurant: any;

  constructor(private restaurantService: RestaurantService) {
  }

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe({
      next: restaurants => this.restaurants = restaurants,
      error: e => console.error(e)
    });
  }

  onSelected(restaurant: RestaurantDetail): void {
    this.selected = true;
    this.selectedRestaurant = restaurant;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.restaurants, event.previousIndex, event.currentIndex);
  }
}
