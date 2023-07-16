import { Component } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent {

  groups = [
    {
      name: 'Early Bird Cyclers',
      description: 'Community of passionate Cyclists',
      img:'assets/events.jpg'
    },
    {
      name: 'Mulmersberry Cyclists',
      description: 'Community of passionate Cyclists',
      img:'assets/events.jpg'
    },
    {
      name: 'Cape Cyclists',
      description: 'Community of passionate Cyclists',
      img:'assets/events.jpg'
    },
    {
      name: 'Wine Cyclists',
      description: 'Community of passionate Cyclists',
      img:'assets/events.jpg'
    }
  ]

}
