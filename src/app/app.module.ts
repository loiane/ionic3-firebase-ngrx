import { CameraEffects } from './../store/effects/camera.effects';
import { CameraStoreService } from './../store/services/camera.store';
import { CameraMock } from './mocks/CameraMock';
import { Camera } from '@ionic-native/camera';
import { NavStoreService } from './../store/services/nav.store';
import { NavEffects } from './../store/effects/nav.effects';
import { TasksProvider } from './../providers/tasks/tasks';
import { TaskEffects } from './../store/effects/tasks.effects';
import { AuthStoreService } from './../store/services/auth.store';
import { reducers } from './../store/reducers/app.reducer';
import { AuthEffects } from './../store/effects/auth.effects';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from "@ngrx/store";

const firebaseConfig = {
  apiKey: 'AIzaSyAWVytc72KwMjGGwgwfsF11UAPXh4SW248',
  authDomain: 'angular-lms-48d70.firebaseapp.com',
  databaseURL: 'https://angular-lms-48d70.firebaseio.com',
  projectId: 'angular-lms-48d70',
  storageBucket: 'angular-lms-48d70.appspot.com',
  messagingSenderId: '728567730560'
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

    StoreModule.provideStore(reducers),
    EffectsModule.run(NavEffects),
    EffectsModule.run(AuthEffects),
    EffectsModule.run(TaskEffects),
    EffectsModule.run(CameraEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension() //debug chrome extension
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NavStoreService,
    AuthProvider,
    AuthStoreService,
    TasksProvider,
    CameraStoreService,

    //Camera //if running on device
    { provide: Camera, useClass: CameraMock } //if running on browser
  ]
})
export class AppModule {}
