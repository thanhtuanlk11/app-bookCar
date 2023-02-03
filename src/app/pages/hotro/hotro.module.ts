import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotroPageRoutingModule } from './hotro-routing.module';

import { HotroPage } from './hotro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotroPageRoutingModule
  ],
  declarations: [HotroPage]
})
export class HotroPageModule {}
