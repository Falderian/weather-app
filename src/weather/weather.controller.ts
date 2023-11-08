import { Body, Controller, Post } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Post('current')
  async currentWeather(@Body() { location }) {
    return await this.weatherService.getCurrentByLocation(location);
  }

  @Post('forecast')
  async forecastWeather(@Body() { location, days }) {
    return await this.weatherService.getForecastByLocation(location, days);
  }

  @Post('history')
  async historyWeather(@Body() { location, date }) {
    return await this.weatherService.getHistoryByLocationDate(location, date);
  }
}
