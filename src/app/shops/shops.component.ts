import { Component } from '@angular/core';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent {
  shops = [
    {
      name: 'Cycle Botique',
      description: 'Premium Bicycles on budget',
      img: "assets/shops.jpg",
      location: "Greenpoint, Cape Town, Western Cape"
    },
    {
      name: 'Woodstock Cycles',
      description: 'Insanely great Bicycles',
      img: "assets/shops.jpg",
      location: "Woodstock, Cape Town, Western Cape"
    },
    {
      name: 'Cycleworks',
      description: 'Premium Bicycles on budget',
      img: "assets/shops.jpg",
      location: "Claremont, Cape Town, Western Cape"
    },
    {
      name: 'Olmpus Cycles',
      description: 'Premium Bicycles on budget',
      img: "assets/shops.jpg",
      location: "Stellenbosch, Cape Town, Western Cape"
    }
  ]
}
