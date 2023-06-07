import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RestaurantDetailComponent} from "./restaurant-detail/restaurant-detail.component";
import {RestaurantListComponent} from "./restaurant-list/restaurant-list.component";

const routes: Routes = [
  {path: 'restaurant', children: [
    {path: 'all', component: RestaurantListComponent},
    {path: '', component: RestaurantDetailComponent, children: [
      {path: ':id', children: [
        {path: 'category/all', component: RestaurantDetailComponent},
        {path: 'recipe/all', component: RestaurantDetailComponent},
        {path: 'michelinStars/all', component: RestaurantDetailComponent},
        {path: 'category', redirectTo: 'category/all'},
        {path: 'recipe', redirectTo: 'recipe/all'},
        {path: 'michelinStars', redirectTo: 'michelinStars/all'}]
    }]
  }]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)], exports: [RouterModule]
})
export class RestaurantRoutingModule {
}
