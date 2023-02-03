import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingdatePage } from './bookingdate.page';

const routes: Routes = [
  {
    path: '',
    component: BookingdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingdatePageRoutingModule {}
