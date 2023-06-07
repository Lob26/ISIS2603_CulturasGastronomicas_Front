/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GastronomicCategoryCreateComponent} from './gastronomicCategory-create.component';

describe('GastronomicCategoryCreateComponent', () => {
  let component: GastronomicCategoryCreateComponent;
  let fixture: ComponentFixture<GastronomicCategoryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GastronomicCategoryCreateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GastronomicCategoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
