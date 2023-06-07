/* tslint:disable:no-unused-variable */

import {inject, TestBed} from '@angular/core/testing';
import {RepresentativeProductService} from './representative-product.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('Service: RepresentativeProduct', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RepresentativeProductService]
    });
  });

  it('should ...', inject([RepresentativeProductService], (service: RepresentativeProductService) => {
    expect(service).toBeTruthy();
  }));
});
