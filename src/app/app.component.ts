import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather/weather.service';
import { Weather } from './weather/model/weather';

declare let NProgress: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weather: Weather;

  constructor(private weatherService: WeatherService) {
    NProgress.configure({
      minimum: 0.2,
      trickleSpeed: 200,
      showSpinner: false
    });
  }

  ngOnInit(): void {
    NProgress.start();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => this._getWeather(position.coords),
        () => this._getWeather()
      );
    } else {
      this._getWeather();
    }
  }

  private _getWeather(coordinates?: Coordinates): void {
    this.weatherService
      .getWeather(coordinates)
      .subscribe(weather => {
        this.weather = weather;
        NProgress.done();
      });
  }

}
