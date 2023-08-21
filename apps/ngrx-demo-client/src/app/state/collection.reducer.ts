import { createReducer, on } from '@ngrx/store';
import { TasksActions } from './tasks.action';

export const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialState,
  on(TasksActions.removeTask, (state, { id }) =>
    state.filter((taskId) => taskId !== id)
  ),
  on(TasksActions.addTask, (state, { id }) => {
    if (state.indexOf(id) > -1) return state;
    return [...state, id];
  })
);
