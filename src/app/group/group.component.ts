import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent {

  @Input() name = '';
  @Input() description = '';
  @Input() img = '';
}
