import { NestFactory } from '@nestjs/core';
import { WeatherModule } from './weather/weather.module';

async function bootstrap() {
  const PORT = process.env.PORT || 4444;
  const app = await NestFactory.create(WeatherModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  await app.listen(PORT, () =>
    console.log('Server is working on the ' + PORT + ' port'),
  );
}
bootstrap();
