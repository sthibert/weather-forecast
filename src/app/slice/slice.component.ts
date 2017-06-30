import * as moment from 'moment';

import { Component, Input } from '@angular/core';
import { DataPoint } from '../weather/model/data-point';

@Component({
  selector: 'app-slice',
  templateUrl: './slice.component.html',
  styleUrls: ['./slice.component.css']
})
export class SliceComponent {

  @Input() dailyForecasts: DataPoint[];

  private index = 0;
  private weatherConditions = {
    'clear-day': 'sunny',
    'clear-night': 'clearnight',
    'rain': 'rain',
    'snow': 'rain',
    'sleet': 'rain',
    'wind': 'cloudy',
    'fog': 'cloudy',
    'cloudy': 'cloudy',
    'partly-cloudy-day': 'partlycloudy',
    'partly-cloudy-night': 'partlycloudynight'
  };

  setIndex(index: number) {
    this.index = index;
  }

  getWeatherCondition() {
    const icon = this.dailyForecasts[this.index].icon;
    return this.weatherConditions[icon] ? this.weatherConditions[icon] : 'partlycloudly';
  }

  getTime() {
    return moment.unix(this.dailyForecasts[this.index].time).format('HH:mm');
  }

  getDay() {
    return moment.unix(this.dailyForecasts[this.index].time).format('dddd');
  }

  getDate() {
    return moment.unix(this.dailyForecasts[this.index].time).format('DD/MM');
  }

  getTemperature() {
    return Math.round(this.dailyForecasts[this.index].temperature);
  }

  getWindDirection() {
    return this.dailyForecasts[this.index].windBearing;
  }

  getWindSpeed() {
    return Math.round(this.dailyForecasts[this.index].windSpeed);
  }

  getCloudiness() {
    return Math.round(this.dailyForecasts[this.index].cloudCover * 100);
  }

  getHumidity() {
    return Math.round(this.dailyForecasts[this.index].humidity * 100);
  }

}
