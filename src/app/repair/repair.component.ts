import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.css']
})
export class RepairComponent {
  @Input() name = '';
  @Input() location = '';
  @Input() description = '';
  @Input() img = '';
}
