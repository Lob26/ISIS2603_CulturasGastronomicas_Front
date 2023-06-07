/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecipeService } from './recipe.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Recipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RecipeService]
    });
  });

  it('should ...', inject([RecipeService], (service: RecipeService) => {
    expect(service).toBeTruthy();
  }));
});
