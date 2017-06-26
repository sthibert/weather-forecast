import * as moment from 'moment';
import * as _ from 'lodash';
import { Dictionary } from 'lodash';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Forecast } from '../weather/model/forecast';

@Component({
  selector: 'app-slices',
  templateUrl: './slices.component.html',
  styleUrls: ['./slices.component.css']
})
export class SlicesComponent implements OnChanges {

  @Input() forecasts: Forecast[];

  forecastsByDay: Dictionary<Forecast[]>;

  ngOnChanges(changes: SimpleChanges): void {
    const forecasts = changes.forecasts.currentValue;
    if (forecasts) {
      this.forecastsByDay = this._groupByDay(forecasts);
    }
  }

  private _groupByDay(forecasts: Forecast[]) {
    return _.groupBy(forecasts, function (forecast) {
      return moment.unix(forecast.dt).format('DD/MM/YYYY');
    });
  }

}
