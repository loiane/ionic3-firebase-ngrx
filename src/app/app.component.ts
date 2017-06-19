import { AuthState } from './../store/state/auth.state';
import { AppState } from './../store/state/app.state';
import { Store } from '@ngrx/store';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'LoginPage';

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private store: Store<AppState>) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    //this.verifyIfUserLoggedIn();
  }

  verifyIfUserLoggedIn(){
    this.store.select('auth')
      .map((state: AuthState) => state.isLoggedIn)
      .subscribe((isLoggedIn: boolean) =>
        this.rootPage = isLoggedIn ? 'HomePage' : 'LoginPage'
      );
  }
}
