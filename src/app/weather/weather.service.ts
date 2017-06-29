import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Weather } from './model/weather';

@Injectable()
export class WeatherService {

  private stub = true;
  private fake = '/assets/sample.json';
  private real = 'http://api.openweathermap.org/data/2.5/forecast' +
    '?id=2800867' +
    '&units=metric' +
    '&appid=bb25bed149949365055b1155cfb198d2';

  constructor(private http: Http) {
  }

  getWeather(): Observable<Weather> {
    return this.http.get(this.stub ? this.fake : this.real)
      .map((response: any) => response.json());
  }

}
