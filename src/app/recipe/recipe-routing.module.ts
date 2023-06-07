import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";

const routes: Routes = [{
  path: 'recipe',
  children: [
    {
      path: 'all',
      component: RecipeListComponent
    },
    {
      path: '',
      component: RecipeDetailComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule {
}
