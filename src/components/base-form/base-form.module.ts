import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BaseFormComponent } from './base-form';

@NgModule({
  declarations: [
    BaseFormComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    BaseFormComponent
  ]
})
export class BaseFormComponentModule {}
