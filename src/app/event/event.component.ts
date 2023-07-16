import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {

  @Input() name = '';
  @Input() date = '';
  @Input() distance = '';
  @Input() description = '';
  @Input() img = '';
  
}
