import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {RestaurantService} from './restaurant.service';

describe('RestaurantService', () => {
  let service: RestaurantService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RestaurantService],
    }).compileComponents();
  });

  beforeEach(()=>{
    service = TestBed.inject(RestaurantService);
  });

  it('should ...', () => {
    expect(service).toBeTruthy();
  });
});
