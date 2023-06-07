import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {CultureService} from './culture.service';

describe('CultureService', () => {
  let service: CultureService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CultureService],
    }).compileComponents();
  });

  beforeEach(()=>{
    service = TestBed.inject(CultureService);
  });

  it('should ...', () => {
    expect(service).toBeTruthy();
  });
});
