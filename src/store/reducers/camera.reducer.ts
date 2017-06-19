import { CameraActionTypes } from './../actions/camera.actions';
import { CameraState } from './../state/camera.state';
import { CameraAction } from "../actions/camera.actions";

export const cameraInitialState: CameraState = {
    photo: null,
    error: null
}

export function cameraReducer(state = cameraInitialState, action: CameraAction): CameraState {
    switch (action.type) {

        case CameraActionTypes.PHOTO_COMPLETED: {
            return Object.assign({}, state, {
                photo: action.payload,
                error: null
            });
        }

        case CameraActionTypes.ERROR: {
            return Object.assign({}, state, {
                photo: null,
                error: action.payload
            });
        }

        default: {
            return state;
        }
    }
}
