import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantsPage } from './plants.page';

const routes: Routes = [


  {
    path: 'tabs',
    component: PlantsPage,
    children: [
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: () => import('./search/search.module').then(m => m.SearchPageModule)
          },
          {
            path: ':plantId',
            loadChildren:() => import('./search/plant-detail/plant-detail.module').then(m => m.PlantDetailPageModule)
          }
        ]
      },
      {
        path: 'offers',
        children: [
          {
            path: '',
            loadChildren: () => import('./offers/offers.module').then(m => m.OffersPageModule)
          },
          {
            path: 'new',
            loadChildren: () => import('./offers/new-offer/new-offer.module').then(m => m.NewOfferPageModule)
          },
          {
            path: 'edit/:plantId',
            loadChildren:() => import('./offers/edit-offers/edit-offers.module').then(m => m.EditOffersPageModule)
          },
          {
            path: ':plantId',
            loadChildren: () => import('./offers/plant-bookings/plant-bookings.module').then(m => m.PlantBookingsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/plants/tabs/search',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/plants/tabs/search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantsPageRoutingModule {}
