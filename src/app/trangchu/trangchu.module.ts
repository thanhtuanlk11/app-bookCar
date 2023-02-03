import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrangchuPageRoutingModule } from './trangchu-routing.module';

import { TrangchuPage } from './trangchu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrangchuPageRoutingModule
  ],
  declarations: [TrangchuPage]
})
export class TrangchuPageModule {}
