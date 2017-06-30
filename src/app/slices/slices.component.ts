import * as moment from 'moment';
import * as _ from 'lodash';
import { Dictionary } from 'lodash';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DataPoint } from '../weather/model/data-point';

@Component({
  selector: 'app-slices',
  templateUrl: './slices.component.html',
  styleUrls: ['./slices.component.css']
})
export class SlicesComponent implements OnChanges {

  @Input() forecasts: DataPoint[];

  forecastsByDay: Dictionary<DataPoint[]>;

  ngOnChanges(changes: SimpleChanges): void {
    const forecasts = changes.forecasts.currentValue;
    if (forecasts) {
      this.forecastsByDay = this._groupByDay(forecasts);
    }
  }

  private _groupByDay(forecasts: DataPoint[]) {
    return _.groupBy(forecasts, function (forecast) {
      return moment.unix(forecast.time).format('DD/MM/YYYY');
    });
  }

}
