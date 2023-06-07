import {Component, OnInit} from '@angular/core';
import {RestaurantDetail} from "../restaurant-detail";
import {ActivatedRoute} from "@angular/router";
import {RestaurantService} from "../restaurant.service";
declare var bootstrap: any;

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css', '../../details.css']
})
export class RestaurantDetailComponent implements OnInit {
  id!: string;
  restaurant!: RestaurantDetail;

  constructor(private route: ActivatedRoute,
              private service: RestaurantService) {
  }

  ngOnInit(): void {
    if (this.restaurant === undefined) {
      this.id = this.route.snapshot.queryParamMap.get('id')!
      if (this.id) {
        this.service.getRestaurant(this.id).subscribe(restaurant => this.restaurant = restaurant);
      }
    }
  }

  showToast() {
    const toastLiveExample = document.getElementById('liveToast')
    const toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
  }
}
