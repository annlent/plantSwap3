import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { NewOfferPageRoutingModule } from './new-offer-routing.module';

import { NewOfferPage } from './new-offer.page';


const routes: Routes = [
  {
    path: '',
    component: NewOfferPage
  }
];


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    NewOfferPageRoutingModule
  ],
  declarations: [NewOfferPage]
})
export class NewOfferPageModule {}
