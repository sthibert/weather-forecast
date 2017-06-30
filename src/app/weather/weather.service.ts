import { Injectable, isDevMode } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Weather } from './model/weather';

@Injectable()
export class WeatherService {

  private stub = '/assets/sample.json';
  private url = 'https://api.darksky.net/forecast/a167000535e5f7bf54535d2d23872d5f/50.85,4.35' +
    '?extend=hourly&units=ca';

  constructor(private http: Http) {
  }

  getWeather(): Observable<Weather> {
    return this.http.get(isDevMode() ? this.stub : this.url)
      .map((response: any) => response.json());
  }

}
