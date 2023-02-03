import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TienichhotroPageRoutingModule } from './tienichhotro-routing.module';

import { TienichhotroPage } from './tienichhotro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TienichhotroPageRoutingModule
  ],
  declarations: [TienichhotroPage]
})
export class TienichhotroPageModule {}
