import { Injectable } from '@nestjs/common';
import { Message } from '@ngrx-demo-client/api-interfaces';

interface Task {
  id: number;
  description: string;
  status: string;
}
@Injectable()
export class AppService {
  tasks: Task[] = [
    {
      id: 1,
      description: 'This is my first task',
      status: 'Done',
    },
    {
      id: 2,
      description: 'This is my second task',
      status: 'in-progress',
    },
  ];

  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  get(): Task[] {
    return this.tasks;
  }

  create(dto: Task) {
    this.tasks.push(dto);
  }
}
