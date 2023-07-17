import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  paginatedIndex: number = 0;
  

  events = [
    {
      name: 'Milnerton Coast Ride',
      date: '2023-07-22',
      distance: '10 km',
      description: 'Riding on the coast with friends',
      img:'assets/events.jpg'
    },
    {
      name: 'Stellenbosch Cycling',
      date: '2023-07-29',
      distance: '16 km',
      description: 'Cape winelands, riding along wine farms',
      img:'assets/groups.jpg'
    },
    {
      name: 'Cape Argus',
      date: '2023-10-10',
      distance: '60 km',
      description: 'Internationally renowned event, an all-day intense cycling',
      img:'assets/shops.jpg'
    },
    {
      name: 'Peninsula Cyclers',
      date: '2023-08-15',
      distance: '11 km',
      description: 'Riding on the coast with friends',
      img:'assets/repair.jpg'
    }
  ];

}
