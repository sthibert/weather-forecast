import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather/weather.service';
import { Weather } from './weather/model/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weather: Weather;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.weatherService
      .getWeather()
      .subscribe(weather => this.weather = weather);
  }

}
