import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarreturntimePage } from './carreturntime.page';

const routes: Routes = [
  {
    path: '',
    component: CarreturntimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarreturntimePageRoutingModule {}
