import { DataBlock } from './data-block';

export class Weather {

  latitude: string;
  longitude: string;
  timezone: string;
  hourly: DataBlock;
  daily: DataBlock;

}
