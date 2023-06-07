import {async, ComponentFixture, TestBed} from '@angular/core/testing';
// noinspection ES6UnusedImports
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {RepresentativeProductListComponent} from './representativeProduct-list.component';
import {HttpClientModule} from '@angular/common/http';
import {RepresentativeProductService} from '../representative-product.service';

describe('RepresentativeProductListComponent', () => {
  let component: RepresentativeProductListComponent;
  let fixture: ComponentFixture<RepresentativeProductListComponent>;
  // noinspection JSUnusedLocalSymbols
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [RepresentativeProductListComponent],
      providers: [RepresentativeProductService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresentativeProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //TESTS
});
