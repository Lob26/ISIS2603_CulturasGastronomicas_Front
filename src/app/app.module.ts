import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RestaurantModule} from './restaurant/restaurant.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CultureModule} from './culture/culture.module';
import {CategoryModule} from './category/category.module';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {FormsModule} from "@angular/forms";
import {RecipeModule} from "./recipe/recipe.module";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {SearchBarComponent} from "./search-bar/search-bar.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, SearchBarComponent],
  imports: [BrowserModule, AppRoutingModule, CultureModule, CategoryModule, RestaurantModule, RecipeModule, HttpClientModule, FormsModule, Ng2SearchPipeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}    
