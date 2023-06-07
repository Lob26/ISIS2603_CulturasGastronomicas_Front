import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {CultureDetailComponent} from './culture-detail.component';
import {CultureService} from "../culture.service";
import {Recipe} from "../../recipe/recipe";
import {GastronomicCategory} from "../../category/gastronomic-category";
import {CountryDetail} from "../country-detail";
import {faker} from "@faker-js/faker";
import {GastronomicCultureDetail} from "../gastronomic-culture-detail";
import {getMockCulture} from "../../mocker";

describe('CultureDetailComponent', () => {
  let component: CultureDetailComponent;
  let fixture: ComponentFixture<CultureDetailComponent>;
  let mockActivatedRoute: ActivatedRoute;
  let mockCultureService: jasmine.SpyObj<CultureService>;

  beforeEach(async () => {
    mockCultureService = jasmine.createSpyObj('CultureService', ['getCulture']);
    mockActivatedRoute = {
      snapshot: {
        queryParamMap: {
          get: jasmine.createSpy('get').and.returnValue('1')
        }
      }
    } as unknown as ActivatedRoute;

    await TestBed.configureTestingModule({
      declarations: [CultureDetailComponent],
      providers: [
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: CultureService, useValue: mockCultureService}
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get culture details if culture is undefined and id is provided', () => {
    const mockCulture = getMockCulture();
    mockCultureService.getCulture.and.returnValue(of(mockCulture));

    component.ngOnInit();

    expect(mockCultureService.getCulture).toHaveBeenCalledWith('1');
    expect(component.culture).toEqual(mockCulture);
  });

  it('should not get culture details if culture is defined', () => {
    const mockCulture = getMockCulture();
    component.culture = mockCulture;

    component.ngOnInit();

    expect(mockCultureService.getCulture).not.toHaveBeenCalled();
    expect(component.culture).toEqual(mockCulture);
  });
});
