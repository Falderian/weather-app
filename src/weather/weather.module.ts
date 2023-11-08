import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { ConfigModule } from '@nestjs/config';
import { ExtraModule } from '../extra/extra.module';

@Module({
  imports: [ConfigModule.forRoot(), ExtraModule],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherModule {}
