import { Task } from './../../models/task';

export interface TasksState {
  tasks: Task[],
  error: any;
}
