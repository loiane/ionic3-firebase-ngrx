import { AuthState } from './../state/auth.state';
import { LoginRequestedAction } from './../actions/auth.actions';
import { AppState } from './../state/app.state';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import { Store } from "@ngrx/store";

@Injectable()
export class AuthStoreService {

  private AUTH_STATE = 'auth';

  constructor(private store: Store<AppState>) {}

  dispatchLoginAction(user){
    this.store.dispatch(new LoginRequestedAction(user));
  }

  getAuthError(){
    return this.storeSelect()
      .map((state: AuthState) => state.error);
  }

  private storeSelect(){
    return this.store.select(this.AUTH_STATE);
  }
}
