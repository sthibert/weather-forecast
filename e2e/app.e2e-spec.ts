import { WeatherFivecastPage } from './app.po';

describe('weather-fivecast App', () => {
  let page: WeatherFivecastPage;

  beforeEach(() => {
    page = new WeatherFivecastPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
