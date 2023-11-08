import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { getUrl } from '../utils/utils';

@Injectable()
export class ExtraService {
  apiKey = `&key=${process.env.apiKey}`;

  async searchLocation(location: string) {
    try {
      return (await axios.get(getUrl('search') + `q=${location}` + this.apiKey))
        .data;
    } catch (error) {
      return error;
    }
  }

  async ipInfo(ip: string) {
    try {
      return (await axios.get(getUrl('ip') + `q=${ip}` + this.apiKey)).data;
    } catch (error) {
      return error;
    }
  }

  async locationsTimezone(location: string) {
    try {
      return (
        await axios.get(getUrl('timezone') + `q=${location}` + this.apiKey)
      ).data;
    } catch (error) {
      return error;
    }
  }

  async astronomyLocation(location: string, date: string) {
    try {
      return (
        await axios.get(
          getUrl('astronomy') + `q=${location}&dt=${date}` + this.apiKey,
        )
      ).data;
    } catch (error) {
      return error;
    }
  }
}
