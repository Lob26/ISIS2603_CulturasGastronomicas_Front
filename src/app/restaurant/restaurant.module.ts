import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RestaurantListComponent} from "./restaurant-list/restaurant-list.component";
import {RestaurantDetailComponent} from "./restaurant-detail/restaurant-detail.component";
import {RouterModule} from "@angular/router";
import { RestaurantRoutingModule } from "./restaurant-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {DragDropModule} from "@angular/cdk/drag-drop";

@NgModule({
  imports: [CommonModule, RouterModule, RestaurantRoutingModule, ReactiveFormsModule, NgxPaginationModule, Ng2SearchPipeModule, FormsModule, DragDropModule],
  exports: [RestaurantListComponent],
  declarations: [RestaurantListComponent, RestaurantDetailComponent]
})
export class RestaurantModule { }
