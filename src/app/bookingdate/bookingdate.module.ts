import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingdatePageRoutingModule } from './bookingdate-routing.module';

import { BookingdatePage } from './bookingdate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingdatePageRoutingModule
  ],
  declarations: [BookingdatePage]
})
export class BookingdatePageModule {}
