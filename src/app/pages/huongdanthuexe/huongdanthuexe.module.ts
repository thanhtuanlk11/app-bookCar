import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuongdanthuexePageRoutingModule } from './huongdanthuexe-routing.module';

import { HuongdanthuexePage } from './huongdanthuexe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuongdanthuexePageRoutingModule
  ],
  declarations: [HuongdanthuexePage]
})
export class HuongdanthuexePageModule {}
