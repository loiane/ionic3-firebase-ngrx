import { NavState } from './../state/nav.state';
import { Action } from '@ngrx/store';
import { type } from '../util';

export const NavActionTypes = {
    PUSH:			type('[Nav] -Push-'),
    POP:			type('[Nav] -Pop-')
};

export class NavPushAction implements Action {
  type = NavActionTypes.PUSH;
  constructor(public payload: NavState){}
}

export class NavPopAction implements Action {
  type = NavActionTypes.POP;
  constructor(public payload = null){}
}

export type NavAction
  = NavPushAction
  | NavPopAction;
