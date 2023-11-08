import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ExtraService } from './extra.service';

@Controller('extra')
export class ExtraController {
  constructor(private readonly extraService: ExtraService) {}

  @Get('search/:location')
  async searchLocation(@Param('location') location: string) {
    return await this.extraService.searchLocation(location);
  }

  @Get('ip/:ip')
  async getIpInfo(@Param('ip') ip: string) {
    return await this.extraService.getIpInfo(ip);
  }

  @Get('timezone/:timezone')
  async getLocationTimezone(@Param('timezone') timezone: string) {
    return await this.extraService.getLocationTimezone(timezone);
  }

  @Post('astronomy')
  async getAstronomyLocation(@Body() { location, date }) {
    return await this.extraService.getAstronomyLocation(location, date);
  }
}
