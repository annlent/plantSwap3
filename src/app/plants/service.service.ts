import { Injectable } from '@angular/core';
import { Plant } from './plant.model';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  private _plants: Plant[] = [
    new Plant(
      'pl1',
      'Tomato',
      'Very nice plant',
      'https://cdn.pixabay.com/photo/2018/07/06/08/49/tomato-3520004_960_720.jpg',
      2.99
    ),

    new Plant(
      'pl2',
      'Broccoli',
      'Very nice green plant',
      'https://cdn.pixabay.com/photo/2016/03/05/19/02/appetite-1238251_960_720.jpg',
      1.99
    ),

    new Plant(
      'pl3',
      'Strawberry',
      'Very sweet berries',
      'https://cdn.pixabay.com/photo/2018/05/26/10/54/strawberries-3431122_960_720.jpg',
      0.99
    )
  ];

  get plants() {
    // eslint-disable-next-line no-underscore-dangle
    return[...this._plants];
  }

  constructor() { }

  getPlant(id: string){
    // eslint-disable-next-line no-underscore-dangle
    return {...this._plants.find(p => p.id === id)};
  };
}
