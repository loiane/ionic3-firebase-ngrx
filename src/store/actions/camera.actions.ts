import { CameraOptions } from '@ionic-native/camera';
import { Action } from '@ngrx/store';
import { type } from '../util';

export const CameraActionTypes = {
  PHOTO_REQUESTED: type('[Camera] -Photo Requested-'),
  PHOTO_COMPLETED: type('[Camera] -Photo Completed-'),

  ERROR: type('[Camera] -Camera Error-')
};

export class CameraRequestedAction implements Action {
  type = CameraActionTypes.PHOTO_REQUESTED;
  constructor(public payload: CameraOptions) {}
}

export class CameraCompletedAction implements Action {
  type = CameraActionTypes.PHOTO_COMPLETED;
  constructor(public payload: any) {}
}

export class CameraErrorAction implements Action {
  type = CameraActionTypes.ERROR;
  constructor(public payload: any) {}
}

export type CameraAction =
  | CameraRequestedAction
  | CameraCompletedAction
  | CameraErrorAction;
