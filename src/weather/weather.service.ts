import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { getUrl } from '../utils/utils';

@Injectable()
export class WeatherService {
  apiKey = `&key=${process.env.apiKey}`;

  async getCurrentByLocation(location: string) {
    try {
      return (
        await axios.get(getUrl('current') + `q=${location}` + this.apiKey)
      ).data;
    } catch (error) {
      return error;
    }
  }

  async getForecastByLocation(location: string, days: number) {
    try {
      return (
        await axios.get(
          getUrl('forecast') + `q=${location}&days=${days}` + this.apiKey,
        )
      ).data;
    } catch (error) {
      return error;
    }
  }

  async getHistoryByLocationDate(location: string, date: string) {
    try {
      return (
        await axios.get(
          getUrl('history') + `q=${location}&dt=${date}` + this.apiKey,
        )
      ).data;
    } catch (error) {
      return error;
    }
  }
}
