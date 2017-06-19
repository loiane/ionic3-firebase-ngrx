import { AuthState } from './../state/auth.state';
import { AuthAction, AuthActionTypes } from "../actions/auth.actions";

export const authInitialState: AuthState = {
    userData: null,
    isLoggedIn: false,
    error: null
}

export function authReducer(state = authInitialState, action: AuthAction): AuthState {
    switch (action.type) {

        case AuthActionTypes.LOGIN_COMPLETED: {
            return Object.assign({}, state, {
                userData: action.payload.user,
                isLoggedIn: action.payload.user != null,
                error: null
            });
        }

        case AuthActionTypes.AUTH_ERROR: {
            return Object.assign({}, state, {
                error: action.payload.error
            });
        }

        case AuthActionTypes.LOGOUT_COMPLETED: {
            return Object.assign({}, state, {
                userData: null,
                isLoggedIn: false
            });
        }

        default: {
            return state;
        }
    }
}
