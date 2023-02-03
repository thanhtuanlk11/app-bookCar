import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HopdongPageRoutingModule } from './hopdong-routing.module';

import { HopdongPage } from './hopdong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HopdongPageRoutingModule
  ],
  declarations: [HopdongPage]
})
export class HopdongPageModule {}
