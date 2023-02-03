import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrangchuPage } from './trangchu.page';

const routes: Routes = [
  {
    path: '',
    component: TrangchuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrangchuPageRoutingModule {}
