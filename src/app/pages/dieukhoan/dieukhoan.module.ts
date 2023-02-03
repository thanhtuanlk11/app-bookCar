import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DieukhoanPageRoutingModule } from './dieukhoan-routing.module';

import { DieukhoanPage } from './dieukhoan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DieukhoanPageRoutingModule
  ],
  declarations: [DieukhoanPage]
})
export class DieukhoanPageModule {}
