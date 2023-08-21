/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Task } from '../tasks.model';

export const selectTasks = createFeatureSelector<ReadonlyArray<Task>>('tasks');

export const selectCollectionState =
  createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectTaskCollection = createSelector(
  selectTasks,
  selectCollectionState,
  (tasks, collection) => {
    return collection.map((id) => tasks.find((task) => task.id === id)!);
  }
);
