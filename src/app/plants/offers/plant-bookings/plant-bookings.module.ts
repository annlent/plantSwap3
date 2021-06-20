import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { PlantBookingsPageRoutingModule } from './plant-bookings-routing.module';

import { PlantBookingsPage } from './plant-bookings.page';


const routes: Routes = [
  {
    path: '',
    component: PlantBookingsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlantBookingsPage]
})
export class PlantBookingsPageModule {}
