import { createActionGroup, props } from '@ngrx/store';
import { Task } from '../tasks.model';

export const TasksActions = createActionGroup({
  source: 'Tasks',
  events: {
    'Add Task': props<{ id: string }>(),
    'Remove Task': props<{ id: string }>(),
  },
});

export const TasksApiActions = createActionGroup({
  source: 'Tasks API',
  events: {
    'Retrieved Task List': props<{ tasks: ReadonlyArray<Task> }>(),
  },
});
