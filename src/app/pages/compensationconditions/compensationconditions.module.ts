import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompensationconditionsPageRoutingModule } from './compensationconditions-routing.module';

import { CompensationconditionsPage } from './compensationconditions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompensationconditionsPageRoutingModule
  ],
  declarations: [CompensationconditionsPage]
})
export class CompensationconditionsPageModule {}
