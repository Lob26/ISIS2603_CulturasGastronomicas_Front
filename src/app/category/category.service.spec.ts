/* tslint:disable:no-unused-variable */

import {inject, TestBed} from '@angular/core/testing';
import {CategoryService} from './category.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('Service: GastronomicCategory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoryService]
    });
  });

  it('should ...', inject([CategoryService], (service: CategoryService) => {
    expect(service).toBeTruthy();
  }));
});
