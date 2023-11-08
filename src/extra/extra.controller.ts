import { Controller } from '@nestjs/common';
import { ExtraService } from './extra.service';

@Controller('extra')
export class ExtraController {
  constructor(private readonly extraService: ExtraService) {}
}
