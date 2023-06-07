import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import { GastronomicCategoryListComponent } from './category/category-list/gastronomicCategory-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'categories', component: GastronomicCategoryListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
