import { Task } from './../../models/task';
import { NavPopAction } from './../actions/nav.actions';
import { TasksProvider } from './../../providers/tasks/tasks';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';

import * as task from './../actions/task.actions';

@Injectable()
export class TaskEffects {

  constructor(
      private api: TasksProvider,
      private actions$: Actions
  ) { }

    @Effect()
    loadAction$: Observable<Action> = this.actions$
        .ofType(task.TaskActionTypes.LOAD)
        .map(action => action.payload)
        .switchMap(() => this.api.load()
          .map(res => new task.LoadCompletedAction({tasks:res}))
          .catch(this.handleError)
    );

    @Effect()
    createAction$: Observable<Action> = this.actions$
        .ofType(task.TaskActionTypes.CREATE)
        .map(action => action.payload.task)
        .switchMap(payload => this.api.create(payload)
          .mergeMap((res: Task) => Observable.from([
            (new task.CreateCompletedAction({task:res})),
            (new NavPopAction())
          ]))
          .catch(this.handleError)
    );

    @Effect()
    updateAction$: Observable<Action> = this.actions$
        .ofType(task.TaskActionTypes.UPDATE)
        .map(action => action.payload)
        .switchMap(payload => this.api.update(payload.taskId, payload.task)
          .mergeMap((res: Task) => Observable.from([
                (new task.UpdateCompletedAction({task:res})),
                (new NavPopAction())
              ]))
          .catch(this.handleError)
    );

    @Effect()
    removeAction$: Observable<Action> = this.actions$
        .ofType(task.TaskActionTypes.REMOVE)
        .map(action => action.payload)
        .switchMap(payload => this.api.remove(payload.taskId)
          .map(res => new task.RemoveCompletedAction({taskId: res}))
          .catch(this.handleError)
    );

    private handleError(error) {
      return Observable.of(new task.ErrorAction({error: error}));
    }
}
