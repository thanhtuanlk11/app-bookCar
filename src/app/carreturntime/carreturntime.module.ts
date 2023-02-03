import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarreturntimePageRoutingModule } from './carreturntime-routing.module';

import { CarreturntimePage } from './carreturntime.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarreturntimePageRoutingModule
  ],
  declarations: [CarreturntimePage]
})
export class CarreturntimePageModule {}
