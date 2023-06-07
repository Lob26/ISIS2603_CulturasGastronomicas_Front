import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RecipeListComponent} from "./recipe-list.component";
import {RecipeService} from "../recipe.service";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";

describe('RecipeListComponent', () => {
  let component: RecipeListComponent;
  let fixture: ComponentFixture<RecipeListComponent>;
  let recipeService: RecipeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [RecipeListComponent],
      providers: [RecipeService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListComponent);
    component = fixture.componentInstance;
    recipeService = TestBed.inject(RecipeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
