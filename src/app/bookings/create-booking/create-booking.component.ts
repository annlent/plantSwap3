import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Plant } from 'src/app/plants/plant.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlant: Plant;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  onCancel(){
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onBookPlant() {
    this.modalCtrl.dismiss({ message: 'This is a dummy message!' }, 'confirm');
  }

}
