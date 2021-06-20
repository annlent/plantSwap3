import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import { Plant } from '../plant.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offers: Plant[];

  constructor(private servicesService: ServiceService, private router: Router) { }

  ngOnInit() {
    this.offers = this.servicesService.plants;
  }
  onEdit(offerId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/', 'plants', 'tabs', 'offers', 'edit', offerId]);
    console.log('Editing item', offerId);
  }

}
