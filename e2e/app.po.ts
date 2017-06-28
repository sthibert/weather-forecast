import { browser, by, element } from 'protractor';

export class WeatherForecastPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
    return element(by.css('app-root h1')).getText();
  }
}
