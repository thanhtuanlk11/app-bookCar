import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HopdongPage } from './hopdong.page';

const routes: Routes = [
  {
    path: '',
    component: HopdongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HopdongPageRoutingModule {}
