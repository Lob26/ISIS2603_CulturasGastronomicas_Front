import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RouterModule} from "@angular/router";
import {RecipeRoutingModule} from './recipe-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import {DragDropModule} from "@angular/cdk/drag-drop";

@NgModule({
  imports: [CommonModule, RouterModule, RecipeRoutingModule, ReactiveFormsModule, NgxPaginationModule, Ng2SearchPipeModule, FormsModule, DragDropModule],
  exports: [RecipeListComponent],
  declarations: [RecipeListComponent, RecipeDetailComponent]
})
export class RecipeModule {
}
