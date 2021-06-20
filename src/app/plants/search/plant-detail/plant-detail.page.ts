import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';
import { Plant } from '../../plant.model';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.page.html',
  styleUrls: ['./plant-detail.page.scss'],
})
export class PlantDetailPage implements OnInit {
  plant: Plant;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private serviceService: ServiceService,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('plantId')) {
        this.navCtrl.navigateBack('/plants/tabs/search');
        return;
      }
      this.plant = this.serviceService.getPlant(paramMap.get('plantId'));
    });
  }



  onBookPlant(){
    // this.router.navigateByUrl('/plants/tabs/search'); üks võimalus navigeerida erinevate lehtede vahel
    // this.navCtrl.navigateBack(['/plants/tabs/search']);
    this.modalCtrl.create({
      component: CreateBookingComponent,
      componentProps: {selectedPlant: this.plant}}).then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    })
    .then(resultData => {
      console.log(resultData.data, resultData.role);
      if(resultData.role ==='confirm') {
        console.log('booked');
      }
    });

  }

}
