import { NavPushAction } from './../actions/nav.actions';
import { Action } from '@ngrx/store';
import { AuthActionTypes, LoginCompletedAction, LogoutCompletedAction, SignUpCompletedAction, AuthErrorAction } from './../actions/auth.actions';
import { AuthProvider } from './../../providers/auth/auth';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';


@Injectable()
export class AuthEffects {

    constructor(
        private authService: AuthProvider,
        private actions$: Actions
    ) { }

    @Effect()
    loginAction$: Observable<Action> = this.actions$
        .ofType(AuthActionTypes.LOGIN_REQUESTED)
        .map(this.toPayload)
        .switchMap(payload => this.authService.signIn(payload)
            .mergeMap(res => Observable.from([
                (new LoginCompletedAction({user: res})),
                (new NavPushAction({page: 'HomePage', toRootNav: true}))
            ]))
            .catch(this.handleError)
    );

    @Effect()
    logoutAction$: Observable<Action> = this.actions$
        .ofType(AuthActionTypes.LOGOUT_REQUESTED)
        .map(this.toPayload)
        .switchMap(payload => this.authService.signOut()
            .map(res => (new LogoutCompletedAction()))
            .catch(this.handleError)
    );

    @Effect()
    signUpAction$: Observable<Action> = this.actions$
        .ofType(AuthActionTypes.SIGNUP_REQUESTED)
        .map(this.toPayload)
        .switchMap(payload => this.authService.signUp(payload.user)
            .map(res => (new SignUpCompletedAction({user: res})))
            .catch(this.handleError)
    );

    private handleError(error) {
      return Observable.of(new AuthErrorAction({error: error}));
    }

    private toPayload(action){
      return action.payload;
    }
}
