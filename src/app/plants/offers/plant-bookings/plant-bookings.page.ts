import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Plant } from '../../plant.model';
import { PlantsPage } from '../../plants.page';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-plant-bookings',
  templateUrl: './plant-bookings.page.html',
  styleUrls: ['./plant-bookings.page.scss'],
})
export class PlantBookingsPage implements OnInit {
  plant: Plant;

  constructor(private route: ActivatedRoute,
    private navCtrl: NavController,
    private serviceService: ServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('plantId')) {
        this.navCtrl.navigateBack('/plants/tabs/offers');
        return;
      }
      this.plant = this.serviceService.getPlant(paramMap.get('plantId'));

    });
  }

}
