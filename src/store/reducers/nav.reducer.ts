import { NavActionTypes, NavAction } from './../actions/nav.actions';
import { NavState } from './../state/nav.state';

export const navInitialState: NavState = {
    page: 'LoginPage',
    params: null,
    toRootNav: true
}

export function navReducer(state = navInitialState, action: NavAction): NavState {
    switch (action.type) {

        case NavActionTypes.PUSH:
        case NavActionTypes.POP: {
            return Object.assign({}, state, action.payload);
        }

        default: {
            return state;
        }
    }
}
