import { Task } from './../../models/task';
import { Action } from '@ngrx/store';
import { type } from "../util";

export const TaskActionTypes = {
    LOAD:             type('[Task] -LOAD Requested-'),
    LOAD_COMPLETED:   type('[Task] -LOAD Completed-'),

    CREATE:           type('[Task] -CREATE Requested-'),
    CREATE_COMPLETED: type('[Task] -CREATE Completed-'),

    UPDATE:           type('[Task] -UPDATE Requested-'),
    UPDATE_COMPLETED: type('[Task] -UPDATE Completed-'),

    REMOVE:           type('[Task] -REMOVE Requested-'),
    REMOVE_COMPLETED: type('[Task] -REMOVE Completed-'),

    TASK_ERROR:       type('[Task] -Error-')
};

export class TaskPayload {
    constructor(public task: Task) { }
}

export class TaskUpdatePayload {
    constructor(public taskId: string, public task: Task) { }
}

export class TaskRemovePayload {
    constructor(public taskId: any) { }
}

export class TasksPayload {
    constructor(public tasks: Task[]) { }
}

export class LoadAction implements Action {
    type = TaskActionTypes.LOAD;

    constructor(public payload: any = null) { }
}

export class LoadCompletedAction implements Action {
    type = TaskActionTypes.LOAD_COMPLETED;

    constructor(public payload: TasksPayload) { }
}

export class CreateAction implements Action {
    type = TaskActionTypes.CREATE;

    constructor(public payload: TaskPayload) { }
}

export class CreateCompletedAction implements Action {
    type = TaskActionTypes.CREATE_COMPLETED;

    constructor(public payload: TaskPayload) { }
}

export class UpdateAction implements Action {
    type = TaskActionTypes.UPDATE;

    constructor(public payload: TaskUpdatePayload) { }
}

export class UpdateCompletedAction implements Action {
    type = TaskActionTypes.UPDATE_COMPLETED;

    constructor(public payload: TaskPayload) { }
}

export class RemoveAction implements Action {
    type = TaskActionTypes.REMOVE;

    constructor(public payload: TaskRemovePayload) { }
}

export class RemoveCompletedAction implements Action {
    type = TaskActionTypes.REMOVE_COMPLETED;

    constructor(public payload: TaskRemovePayload) { }
}

export class ErrorAction implements Action {
    type = TaskActionTypes.TASK_ERROR;

    constructor(public payload: any) { }
}

export type TaskAction
    = LoadAction
    | LoadCompletedAction
    | CreateAction
    | CreateCompletedAction
    | UpdateAction
    | UpdateCompletedAction
    | RemoveAction
    | RemoveCompletedAction
    | ErrorAction;
