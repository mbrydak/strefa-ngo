import { Controller, Get } from '@nestjs/common';

import { User } from '@sn/models';

import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly appService: AppService;

  constructor(appService: AppService) {
    this.appService = appService;
  }

  @Get()
  getUser(): Promise<User> {
    return this.appService.getUser();
  }
}
