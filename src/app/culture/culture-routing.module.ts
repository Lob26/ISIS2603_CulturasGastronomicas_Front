import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CultureDetailComponent} from "./culture-detail/culture-detail.component";
import {CultureListComponent} from "./culture-list/culture-list.component";

const routes: Routes = [
  {path: 'culture', children: [
    {path: 'all', component: CultureListComponent},
    {path: '', component: CultureDetailComponent, children: [
      {path: ':id', children: [
        {path: 'category/all', component: CultureDetailComponent},
        {path: 'recipe/all', component: CultureDetailComponent},
        {path: 'country/all', component: CultureDetailComponent},
        {path: 'category', redirectTo: 'category/all'},
        {path: 'recipe', redirectTo: 'recipe/all'},
        {path: 'country', redirectTo: 'country/all'}]
    }]
  }]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)], exports: [RouterModule]
})
export class CultureRoutingModule {
}
