import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompensationconditionsPage } from './compensationconditions.page';

const routes: Routes = [
  {
    path: '',
    component: CompensationconditionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompensationconditionsPageRoutingModule {}
