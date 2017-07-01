import { Injectable, isDevMode } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Weather } from './model/weather';

@Injectable()
export class WeatherService {

  private local = 'http://localhost:3001/api.darksky';
  private prod = 'https://hydro-pylon-13592.herokuapp.com/api.darksky';

  constructor(private http: Http) {
  }

  getWeather(): Observable<Weather> {
    return this.http.get(isDevMode() ? this.local : this.prod)
      .map((response: any) => response.json());
  }

}
