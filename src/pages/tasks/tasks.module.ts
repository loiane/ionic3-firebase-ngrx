import { TaskListItemComponent } from './task-list-item/task-list-item';
import { TasksStoreService } from './../../store/services/tasks.store';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TasksPage } from './tasks';

@NgModule({
  declarations: [
    TasksPage,
    TaskListItemComponent
  ],
  imports: [
    IonicPageModule.forChild(TasksPage)
  ],
  exports: [
    TasksPage
  ],
  providers: [
    TasksStoreService
  ]
})
export class TasksPageModule {}
