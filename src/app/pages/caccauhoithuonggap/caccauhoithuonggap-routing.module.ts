import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaccauhoithuonggapPage } from './caccauhoithuonggap.page';

const routes: Routes = [
  {
    path: '',
    component: CaccauhoithuonggapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaccauhoithuonggapPageRoutingModule {}
