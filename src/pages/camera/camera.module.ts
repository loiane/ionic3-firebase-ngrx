import { DisplayErrorComponentModule } from './../../components/display-error/display-error.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CameraPage } from './camera';

@NgModule({
  declarations: [
    CameraPage
  ],
  imports: [
    IonicPageModule.forChild(CameraPage),
    DisplayErrorComponentModule
  ],
  exports: [
    CameraPage
  ]
})
export class CameraPageModule {}
