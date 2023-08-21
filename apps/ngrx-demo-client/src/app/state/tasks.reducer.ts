import { createReducer, on } from '@ngrx/store';
import { Task } from '../tasks.model';
import { TasksApiActions } from './tasks.action';

export const initialState: ReadonlyArray<Task> = [];

export const tasksReducer = createReducer(
  initialState,
  on(TasksApiActions.retrievedTaskList, (_state, { tasks }) => tasks)
);
