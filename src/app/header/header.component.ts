import { Component, Input } from '@angular/core';
import { City } from '../weather/model/city';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() city: City;

  getCityName() {
    if (this.city) {
      return this.city.name + ', ' + this.city.country;
    }
  }

}
