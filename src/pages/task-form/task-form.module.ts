import { BaseFormComponentModule } from './../../components/base-form/base-form.module';
import { TasksPageModule } from './../tasks/tasks.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskFormPage } from './task-form';

@NgModule({
  declarations: [
    TaskFormPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskFormPage),
    TasksPageModule,
    BaseFormComponentModule
  ],
  exports: [
    TaskFormPage
  ]
})
export class TaskFormPageModule {}
