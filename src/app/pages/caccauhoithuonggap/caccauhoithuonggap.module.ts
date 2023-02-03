import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaccauhoithuonggapPageRoutingModule } from './caccauhoithuonggap-routing.module';

import { CaccauhoithuonggapPage } from './caccauhoithuonggap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaccauhoithuonggapPageRoutingModule
  ],
  declarations: [CaccauhoithuonggapPage]
})
export class CaccauhoithuonggapPageModule {}
