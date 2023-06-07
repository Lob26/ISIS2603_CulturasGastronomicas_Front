import {ComponentFixture, TestBed} from '@angular/core/testing';
import {of} from 'rxjs';
import {RestaurantDetail} from "../restaurant-detail";
import {RestaurantListComponent} from "./restaurant-list.component";
import {RestaurantService} from "../restaurant.service";
import { getMockRestaurant } from 'src/app/mocker';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";

describe('RestaurantListComponent', () => {
  let component: RestaurantListComponent;
  let fixture: ComponentFixture<RestaurantListComponent>;
  let restaurantService: RestaurantService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [RestaurantListComponent],
      providers: [RestaurantService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantListComponent);
    component = fixture.componentInstance;
    restaurantService = TestBed.inject(RestaurantService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch restaurants on initialization', () => {
    const mockRestaurants: Array<RestaurantDetail> = [getMockRestaurant(), getMockRestaurant(), getMockRestaurant()];

    spyOn(restaurantService, 'getRestaurants').and.returnValue(of(mockRestaurants));

    component.ngOnInit();

    expect(restaurantService.getRestaurants).toHaveBeenCalled();
    expect(component.restaurants).toEqual(mockRestaurants);
  });

  it('should set selectedCulture when onSelected is called', () => {
    const mockRestaurant: RestaurantDetail = getMockRestaurant();

    component.onSelected(mockRestaurant);

    expect(component.selected).toBe(true);
    expect(component.selectedRestaurant).toEqual(mockRestaurant);
  });
});
