/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GastronomicCategoryDetailComponent} from './gastronomicCategory-detail.component';

describe('GastronomicCategoryDetailComponent', () => {
  let component: GastronomicCategoryDetailComponent;
  let fixture: ComponentFixture<GastronomicCategoryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GastronomicCategoryDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastronomicCategoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
