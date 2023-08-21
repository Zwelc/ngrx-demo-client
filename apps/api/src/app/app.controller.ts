import { Body, Controller, Get, Post } from '@nestjs/common';

import { Message } from '@ngrx-demo-client/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('tasks')
  getTasks() {
    return this.appService.get();
  }

  @Post('tasks')
  createTask(@Body() dto) {
    return this.appService.create(dto);
  }
}
