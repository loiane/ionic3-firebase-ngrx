import { NavState } from './nav.state';
import { AuthState } from './auth.state';

export interface AppState {
  navInfo: NavState,
  auth: AuthState
};
