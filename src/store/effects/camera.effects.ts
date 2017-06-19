import { CameraActionTypes, CameraCompletedAction, CameraErrorAction } from './../actions/camera.actions';
import { Camera } from '@ionic-native/camera';
import { Action } from '@ngrx/store';
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
export class CameraEffects {

    constructor(
        private camera: Camera,
        private actions$: Actions
    ) { }

    @Effect()
    loginAction$: Observable<Action> = this.actions$
        .ofType(CameraActionTypes.PHOTO_REQUESTED)
        .map(this.toPayload)
        .switchMap(payload => Observable.fromPromise(this.camera.getPicture(payload))
            .map(res => new CameraCompletedAction(this.toBase64(res)))
            .catch(this.handleError)
    );

    private handleError(error) {
      return Observable.of(new CameraErrorAction({message:error}));
    }

    private toPayload(action){
      return action.payload;
    }

    private toBase64(imageData){
      return 'data:image/jpeg;base64,' + imageData;
    }
}
