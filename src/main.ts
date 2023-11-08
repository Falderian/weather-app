import { NestFactory } from '@nestjs/core';
import { WeatherModule } from './weather/weather.module';

async function bootstrap() {
  const PORT = process.env.PORT || 4444;
  const app = await NestFactory.create(WeatherModule);
  await app.listen(PORT);
}
bootstrap();
