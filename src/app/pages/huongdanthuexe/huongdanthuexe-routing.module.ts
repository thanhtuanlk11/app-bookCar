import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuongdanthuexePage } from './huongdanthuexe.page';

const routes: Routes = [
  {
    path: '',
    component: HuongdanthuexePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuongdanthuexePageRoutingModule {}
