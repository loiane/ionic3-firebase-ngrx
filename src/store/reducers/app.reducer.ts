import { authReducer } from './auth.reducer';
import { taskReducer } from './task.reducer';
import { navReducer } from './nav.reducer';
import { cameraReducer } from './camera.reducer';

export const reducers = {
    navInfo: navReducer,
    auth: authReducer,
    tasks: taskReducer,
    camera: cameraReducer
}
