import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { SeriesComponent } from './views/series/series.component';
import { MoviesComponent } from './views/movies/movies.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'series',
    component: SeriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
