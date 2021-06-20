import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantDetailPage } from './plant-detail.page';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PlantDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlantDetailPage, CreateBookingComponent],
  entryComponents: [CreateBookingComponent]
})
export class PlantDetailPageModule {}
