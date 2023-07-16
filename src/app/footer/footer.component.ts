import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  getYear() {
    const year: Date = new Date();
    return year.getFullYear();
  }
}
