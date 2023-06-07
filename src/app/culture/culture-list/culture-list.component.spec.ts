import {ComponentFixture, TestBed} from '@angular/core/testing';
import {of} from 'rxjs';
import {GastronomicCultureDetail} from "../gastronomic-culture-detail";
import {CultureListComponent} from "./culture-list.component";
import {CultureService} from "../culture.service";
import {getMockCulture} from "../../mocker";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";

describe('CultureListComponent', () => {
  let component: CultureListComponent;
  let fixture: ComponentFixture<CultureListComponent>;
  let cultureService: CultureService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [CultureListComponent],
      providers: [CultureService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureListComponent);
    component = fixture.componentInstance;
    cultureService = TestBed.inject(CultureService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch cultures on initialization', () => {
    const mockCultures: Array<GastronomicCultureDetail> = [getMockCulture(), getMockCulture(), getMockCulture()];

    spyOn(cultureService, 'getCultures').and.returnValue(of(mockCultures));

    component.ngOnInit();

    expect(cultureService.getCultures).toHaveBeenCalled();
    expect(component.cultures).toEqual(mockCultures);
  });

  it('should set selectedCulture when onSelected is called', () => {
    const mockCulture: GastronomicCultureDetail = getMockCulture();

    component.onSelected(mockCulture);

    expect(component.selected).toBe(true);
    expect(component.selectedCulture).toEqual(mockCulture);
  });
});
