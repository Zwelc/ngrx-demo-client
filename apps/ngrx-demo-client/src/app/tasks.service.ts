import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from './tasks.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Array<Task>> {
    return this.http
      .get<Task[]>('/api/tasks')
      .pipe(map((tasks) => tasks || []));
  }
}
