import { DisplayErrorComponentModule } from './../../components/display-error/display-error.module';
import { BaseFormComponentModule } from './../../components/base-form/base-form.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    ReactiveFormsModule,
    BaseFormComponentModule,
    DisplayErrorComponentModule
  ],
  exports: [
    LoginPage
  ]
})
export class LoginPageModule {}
