import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { PlantsPageRoutingModule } from './plants-routing.module';

import { PlantsPage } from './plants.page';




@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PlantsPageRoutingModule
  ],
  declarations: [PlantsPage]
})
export class PlantsPageModule {}
