import { TasksState } from './../state/tasks.state';
import { Task } from './../../models/task';
import { TaskAction, TaskActionTypes } from "../actions/task.actions";

export const tasksInitialState: TasksState = {
  tasks: [],
  error: null
}

export function taskReducer(state = tasksInitialState, action: TaskAction): TasksState {

    switch (action.type) {

        case TaskActionTypes.LOAD_COMPLETED:
            return Object.assign({}, state, {
                tasks: action.payload.tasks,
                error: null
            });

        case TaskActionTypes.CREATE_COMPLETED:
            /* how we normally handle CREATE:
            tasks: [...state.tasks, action.payload.task],
            but because of firebase realtime database we handle as it was an update
            OR we don't need a reducer for CREATE since LOAD_COMPLETED will be dispatched
            onde firebase get's updated*/
        case TaskActionTypes.UPDATE_COMPLETED:
            return Object.assign({}, state, {
                tasks: state.tasks.map((task: Task) => {
                    return task.id === action.payload.task.id ? action.payload.task : task;
                }),
                error: null
            });

        case TaskActionTypes.REMOVE_COMPLETED:
            return Object.assign({}, state, {
                tasks: state.tasks.filter((task: Task) => {
                  return task.id !== action.payload.taskId;
                }),
                error: null
            });

        case TaskActionTypes.TASK_ERROR: {
            return Object.assign({}, state, {
                error: action.payload.error
            });
        }

        default:
            return state;
    }
};
