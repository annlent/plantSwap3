import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffersPage } from './offers.page';

const routes: Routes = [
  {
    path: '',
    component: OffersPage
  },
  {
    path: 'new-offer',
    loadChildren: () => import('./new-offer/new-offer.module').then( m => m.NewOfferPageModule)
  },
  {
    path: 'edit-offers',
    loadChildren: () => import('./edit-offers/edit-offers.module').then( m => m.EditOffersPageModule)
  },
  {
    path: 'plant-bookings',
    loadChildren: () => import('./plant-bookings/plant-bookings.module').then( m => m.PlantBookingsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffersPageRoutingModule {}
