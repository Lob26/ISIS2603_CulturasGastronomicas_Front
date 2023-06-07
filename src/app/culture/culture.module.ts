import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CultureListComponent} from "./culture-list/culture-list.component";
import {CultureDetailComponent} from "./culture-detail/culture-detail.component";
import {RouterModule} from "@angular/router";
import {CultureRoutingModule} from './culture-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {DragDropModule} from "@angular/cdk/drag-drop";

@NgModule({
  imports: [CommonModule, RouterModule, CultureRoutingModule, ReactiveFormsModule, NgxPaginationModule, Ng2SearchPipeModule, FormsModule, DragDropModule],
  exports: [CultureListComponent],
  declarations: [CultureListComponent, CultureDetailComponent]
})
export class CultureModule { }
