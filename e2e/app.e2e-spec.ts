import { WeatherForecastPage } from './app.po';

describe('weather-forecast app', () => {
  let page: WeatherForecastPage;

  beforeEach(() => {
    page = new WeatherForecastPage();
  });

  it('should display header text', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toContain('Weather Forecast');
  });
});
