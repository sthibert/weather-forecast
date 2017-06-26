import * as moment from 'moment';
import * as _ from 'lodash';

import { Component, Input } from '@angular/core';
import { Forecast } from '../weather/model/forecast';

@Component({
  selector: 'app-slice',
  templateUrl: './slice.component.html',
  styleUrls: ['./slice.component.css']
})
export class SliceComponent {

  @Input() dailyForecasts: Forecast[];

  private index = 0;

  private weatherConditions = {
    'sunny': [800],
    'partlycloudy': [801, 903, 904, 905, 951, 952, 953, 954, 955, 956],
    'cloudy': [701, 711, 721, 731, 741, 751, 761, 762, 771, 781, 802, 803, 804, 957, 958, 959],
    'rain': [300, 301, 302, 310, 311, 312, 313, 314, 321, 500, 501, 502, 503, 504, 511, 520, 521, 522, 531, 600, 601,
      602, 611, 612, 615, 616, 620, 621, 622, 906],
    'thunders': [200, 201, 202, 210, 211, 212, 221, 230, 231, 232, 900, 901, 902, 960, 961, 962]
  };

  setIndex(index: number) {
    this.index = index;
  }

  getWeatherCondition() {
    for (const key of Object.keys(this.weatherConditions)) {
      if (_.includes(this.weatherConditions[key], this.dailyForecasts[this.index].weather[0].id)) {
        return key;
      }
    }
    return 'partlycloudly';
  }

  getTime() {
    return moment.unix(this.dailyForecasts[this.index].dt).format('HH:mm');
  }

  getDay() {
    return moment.unix(this.dailyForecasts[this.index].dt).format('dddd');
  }

  getDate() {
    return moment.unix(this.dailyForecasts[this.index].dt).format('DD/MM');
  }

  getTemperature() {
    return Math.round(this.dailyForecasts[this.index].main.temp);
  }

  getWindDirection() {
    return this.dailyForecasts[this.index].wind.deg;
  }

  getWindSpeed() {
    return Math.round(this.dailyForecasts[this.index].wind.speed);
  }

  getHumidity() {
    return this.dailyForecasts[this.index].main.humidity;
  }

}
