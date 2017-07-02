import * as moment from 'moment';

import { Component, Input } from '@angular/core';
import { DataPoint } from '../weather/model/data-point';

@Component({
  selector: 'app-slice',
  templateUrl: './slice.component.html',
  styleUrls: ['./slice.component.css']
})
export class SliceComponent {

  @Input() dailyForecast: DataPoint[];

  private _index = 0;
  private _weatherConditions = {
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

  setIndex(index: number): void {
    this._index = index;
  }

  getWeatherCondition(): string {
    const icon = this._getHourlyForecast().icon;
    return this._weatherConditions[icon] ? this._weatherConditions[icon] : 'partlycloudly';
  }

  getTime(): string {
    return moment.unix(this._getHourlyForecast().time).format('HH:mm');
  }

  getDay(): string {
    return moment.unix(this._getHourlyForecast().time).format('dddd');
  }

  getDate(): string {
    return moment.unix(this._getHourlyForecast().time).format('DD/MM');
  }

  getTemperature(): number {
    return Math.round(this._getHourlyForecast().temperature);
  }

  getWindDirection(): number {
    return this._getHourlyForecast().windBearing;
  }

  getWindSpeed(): number {
    return Math.round(this._getHourlyForecast().windSpeed);
  }

  getCloudiness(): number {
    return Math.round(this._getHourlyForecast().cloudCover * 100);
  }

  getHumidity(): number {
    return Math.round(this._getHourlyForecast().humidity * 100);
  }

  private _getHourlyForecast(): DataPoint {
    return this.dailyForecast[this._index];
  }

}
