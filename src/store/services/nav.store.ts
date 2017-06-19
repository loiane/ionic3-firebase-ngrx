import { NavState } from './../state/nav.state';
import { NavPushAction, NavPopAction } from './../actions/nav.actions';
import { AppState } from './../state/app.state';
import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";

@Injectable()
export class NavStoreService {

  private STATE = 'navInfo';

  constructor(private store: Store<AppState>) {}

  dispatchNavCtrlPushAction(page, params?){
    this.store.dispatch(new NavPushAction({
      page: page,
      params: params,
      toRootNav: false
    }));
  }

  dispatchNavCtrlPopAction(){
    this.store.dispatch(new NavPopAction());
  }

  getPageParams(){
    return this.storeSelect()
      .map((state: NavState) => state.params);
  }

  private storeSelect(){
    return this.store.select(this.STATE);
  }
}
