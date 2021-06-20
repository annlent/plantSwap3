import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Plant } from '../plant.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  loadedPlants: Plant[];

  constructor(private serviceService: ServiceService,
    private menuCtrl: MenuController) { }

  ngOnInit() {
    this.loadedPlants =this.serviceService.plants;
  }
  onOpenMenu() {
    this.menuCtrl.toggle();
  }

}
