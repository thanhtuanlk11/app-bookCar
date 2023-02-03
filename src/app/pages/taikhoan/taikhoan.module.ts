import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaikhoanPageRoutingModule } from './taikhoan-routing.module';

import { TaikhoanPage } from './taikhoan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaikhoanPageRoutingModule
  ],
  declarations: [TaikhoanPage]
})
export class TaikhoanPageModule {}
