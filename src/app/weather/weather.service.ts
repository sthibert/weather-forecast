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

  getWeather(latitude?: number, longitude?: number): Observable<Weather> {
    const url = this._getUrl(latitude || 50.85, longitude || 4.35); // Brussels by default
    return this.http.get(url)
      .map((response: any) => response.json());
  }

  private _getUrl(latitude: number, longitude: number): string {
    const domain = (isDevMode() ? this.domain.local : this.domain.prod);
    const route = '/api/darksky';
    const parameters = '?latitude=' + latitude + '&longitude=' + longitude;
    return domain + route + parameters;
  }

}
