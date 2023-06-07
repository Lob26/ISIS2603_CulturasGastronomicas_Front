import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {RestaurantDetailComponent} from './restaurant-detail.component';
import {RestaurantService} from "../restaurant.service";
import {getMockRestaurant} from "../../mocker";

describe('RestaurantDetailComponent', () => {
  let component: RestaurantDetailComponent;
  let fixture: ComponentFixture<RestaurantDetailComponent>;
  let mockActivatedRoute: ActivatedRoute;
  let mockRestaurantService: jasmine.SpyObj<RestaurantService>;

  beforeEach(async () => {
    mockRestaurantService = jasmine.createSpyObj('RestaurantService', ['getRestaurant']);
    mockActivatedRoute = {
      snapshot: {
        queryParamMap: {
          get: jasmine.createSpy('get').and.returnValue('1')
        }
      }
    } as unknown as ActivatedRoute;

    await TestBed.configureTestingModule({
      declarations: [RestaurantDetailComponent],
      providers: [
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: RestaurantService, useValue: mockRestaurantService}
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get restaurant details if restaurant is undefined and id is provided', () => {
    const mockRestaurant = getMockRestaurant();
    mockRestaurantService.getRestaurant.and.returnValue(of(mockRestaurant));

    component.ngOnInit();

    expect(mockRestaurantService.getRestaurant).toHaveBeenCalledWith('1');
    expect(component.restaurant).toEqual(mockRestaurant);
  });

  it('should not get culture details if culture is defined', () => {
    const mockRestaurant = getMockRestaurant();
    component.restaurant = mockRestaurant;

    component.ngOnInit();

    expect(mockRestaurantService.getRestaurant).not.toHaveBeenCalled();
    expect(component.restaurant).toEqual(mockRestaurant);
  });
});
