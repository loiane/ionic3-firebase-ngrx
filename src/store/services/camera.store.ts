import { CameraState } from './../state/camera.state';
import { CameraRequestedAction } from './../actions/camera.actions';
import { AppState } from './../state/app.state';
import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";

@Injectable()
export class CameraStoreService {

  private STATE = 'camera';

  constructor(private store: Store<AppState>) {}

  dispatchTakePictureAction(options){
    this.store.dispatch(new CameraRequestedAction(options));
  }

  getPicture(){
    return this.storeSelect()
      .map((state: CameraState) => state.photo);
  }

  getError(){
    return this.storeSelect()
      .map((state: CameraState) => state.error);
  }

  private storeSelect(){
    return this.store.select(this.STATE);
  }
}
