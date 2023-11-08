import { Test, TestingModule } from '@nestjs/testing';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;
  const location = 'Hrodna';
  const days = 3;
  const date = '2023-11-01';

  beforeAll(() => {
    process.env.apiKey = '92185dc7f7034db8a4f72453230210';
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeatherService],
    }).compile();

    service = module.get<WeatherService>(WeatherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get current weather', async () => {
    const res = await service.getCurrentByLocation(location);
    expect(res.location.name).toEqual(location);
  });

  it('should get forecast weather for 3 days', async () => {
    const res = await service.getForecastByLocation(location, days);
    expect(res.forecast.forecastday.length).toEqual(days);
  });

  it(`should get history weather for ${date}`, async () => {
    const res = await service.getHistoryByLocationDate(location, date);
    expect(res.location.name).toEqual(location);
    expect(res.forecast.forecastday[0].date === date).toBeTruthy();
  });
});
