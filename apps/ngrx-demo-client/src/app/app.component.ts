/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@ngrx-demo-client/api-interfaces';
import { TasksService } from './tasks.service';
import { TasksApiActions } from './state/tasks.action';
import { Store } from '@ngrx/store';
import { selectTasks } from './state/tasks.selectors';

@Component({
  selector: 'ngrx-demo-client-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks$ = this.store.select(selectTasks);

  constructor(private taskService: TasksService, private store: Store) {}

  ngOnInit() {
    this.taskService
      .getTasks()
      .subscribe((tasks) =>
        this.store.dispatch(TasksApiActions.retrievedTaskList({ tasks }))
      );
  }
}
