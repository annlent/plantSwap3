import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantBookingsPage } from './plant-bookings.page';

const routes: Routes = [
  {
    path: '',
    component: PlantBookingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantBookingsPageRoutingModule {}
