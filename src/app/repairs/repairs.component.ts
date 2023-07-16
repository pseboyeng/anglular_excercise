import { Component } from '@angular/core';

@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.component.html',
  styleUrls: ['./repairs.component.css']
})
export class RepairsComponent {
  repairs = [
    {
      name: 'Cycle Botique',
      description: 'Premium Bicycles on budget',
      img: "assets/shops.jpg",
      location: "Greenpoint, Cape Town, Western Cape"
    },
    {
      name: 'Cycle Botique',
      description: 'Premium Bicycles on budget',
      img: "assets/shops.jpg",
      location: "Greenpoint, Cape Town, Western Cape"
    },
    {
      name: 'Cycle Botique',
      description: 'Premium Bicycles on budget',
      img: "assets/shops.jpg",
      location: "Greenpoint, Cape Town, Western Cape"
    },
    {
      name: 'Cycle Botique',
      description: 'Premium Bicycles on budget',
      img: "assets/shops.jpg",
      location: "Greenpoint, Cape Town, Western Cape"
    }
  ]
}
