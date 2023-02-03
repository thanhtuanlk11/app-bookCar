import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotroPage } from './hotro.page';

const routes: Routes = [
  {
    path: '',
    component: HotroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotroPageRoutingModule {}
