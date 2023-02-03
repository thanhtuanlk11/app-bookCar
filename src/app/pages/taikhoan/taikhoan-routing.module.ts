import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaikhoanPage } from './taikhoan.page';

const routes: Routes = [
  {
    path: '',
    component: TaikhoanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaikhoanPageRoutingModule {}
