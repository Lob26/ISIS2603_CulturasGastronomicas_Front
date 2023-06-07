import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {GastronomicCategoryListComponent} from './category/category-list/gastronomicCategory-list.component';
import {
  RepresentativeProductListComponent
} from './representative-product/representative-product-list/representativeProduct-list.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [AppComponent, GastronomicCategoryListComponent, RepresentativeProductListComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'base-project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('base-project');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('footer.page-footer div.container div.row div.col-md-12')?.textContent).toContain(
      'Grupo de Culturas Gastronomicas, ISIS2603 2023-10'
    );
  });
});
