import { WeatherCondition } from './weather-condition';
import { Clouds } from './clouds';
import { Wind } from './wind';
import { Rain } from './rain';
import { Snow } from './snow';
import { MainInformation } from './main-information';

export class Forecast {

  dt: number; // Timestamp of data forecasted, UTC
  main: MainInformation;
  weather: WeatherCondition[];
  clouds: Clouds;
  wind: Wind;
  rain: Rain;
  snow: Snow;

}
