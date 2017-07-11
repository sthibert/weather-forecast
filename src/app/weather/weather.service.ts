import { Injectable, isDevMode } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Weather } from './model/weather';

@Injectable()
export class WeatherService {

  private domain = {
    local: 'http://localhost:3001',
    prod: 'https://blooming-forest-83104.herokuapp.com'
  };

  constructor(private http: Http) {
  }

  getWeather(coordinates?: Coordinates): Observable<Weather> {
    const latitude = coordinates ? coordinates.latitude : 50.85;
    const longitude = coordinates ? coordinates.longitude : 4.35;
    return this.http.get(this._getUrl(latitude, longitude))
      .map((response: any) => response.json());
  }

  private _getUrl(latitude: number, longitude: number): string {
    const domain = (isDevMode() ? this.domain.local : this.domain.prod);
    const route = '/api/darksky';
    const parameters = '?latitude=' + latitude + '&longitude=' + longitude;
    return domain + route + parameters;
  }

}
