import { Task } from './../../models/task';
import { TasksState } from './../state/tasks.state';
import { AppState } from './../state/app.state';
import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";

import * as fromTask from './../actions/task.actions';

@Injectable()
export class TasksStoreService {

  private STATE = 'tasks';

  constructor(private store: Store<AppState>) {}

  dispatchLoadAction(){
    this.store.dispatch(new fromTask.LoadAction());
  }

  dispatchCreateAction(task: Task){
    this.store.dispatch(new fromTask.CreateAction({task:task}));
  }

  dispatchRemoveAction(id){
    this.store.dispatch(new fromTask.RemoveAction({taskId: id}));
  }

  dispatchUpdateAction(task: Task){
    this.store.dispatch(new fromTask.UpdateAction({
      taskId: task.id,
      task: task
    }));
  }

  getTasks(){
    return this.storeSelect()
      .map((state: TasksState) => state.tasks);
  }

  private storeSelect(){
    return this.store.select(this.STATE);
  }
}
