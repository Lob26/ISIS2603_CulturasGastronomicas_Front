/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
// noinspection ES6UnusedImports
import {By} from '@angular/platform-browser';
import {GastronomicCategoryListComponent} from './gastronomicCategory-list.component';
import {HttpClientModule} from '@angular/common/http';
// noinspection ES6UnusedImports
import {GastronomicCulture} from "../../culture/gastronomic-culture";

describe('GastronomicCategoryListComponent', () => {
  let component: GastronomicCategoryListComponent;
  let fixture: ComponentFixture<GastronomicCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [GastronomicCategoryListComponent],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastronomicCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //BeforeEach

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Tests

});
