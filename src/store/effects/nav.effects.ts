import { NavState } from './../state/nav.state';
import { NavActionTypes } from './../actions/nav.actions';
import { App, AlertController } from 'ionic-angular';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class NavEffects {

    constructor(
        private app: App,
        private alertCtrl: AlertController,
        private actions$: Actions
    ) { }

    @Effect({ dispatch: false })
    pushAction$: Observable<Action> = this.actions$
        .ofType(NavActionTypes.PUSH)
        .map(action => action.payload)
        .do((navInfo: NavState) => {
            const navCtrl = this.app.getActiveNav();
            navInfo.toRootNav ? navCtrl.setRoot(navInfo.page) : navCtrl.push(navInfo.page);
        })
        .catch(this.handleError);

    @Effect({ dispatch: false })
    popAction$: Observable<Action> = this.actions$
        .ofType(NavActionTypes.POP)
        .map(action => action.payload)
        .do((navInfo: NavState) => this.app.getActiveNav().pop())
        .catch(this.handleError);

    private handleError(error){
      let alert = this.alertCtrl.create({
        title: 'Navigation failed',
        subTitle: error,
        buttons: ['OK']
      });
      alert.present();
      return Observable.of(error);
    }
}
