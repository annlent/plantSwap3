import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Plant } from '../../plant.model';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-edit-offers',
  templateUrl: './edit-offers.page.html',
  styleUrls: ['./edit-offers.page.scss'],
})
export class EditOffersPage implements OnInit {
  plant: Plant;

  constructor(
    private route: ActivatedRoute,
    private serviceService: ServiceService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('plantId')) {
        this.navCtrl.navigateBack('plants/tabs/offers');
        return;
      }
      this.plant = this.serviceService.getPlant(paramMap.get('plantId'));
    });
  }

}
