import { NavStoreService } from './../../store/services/nav.store';
import { TasksStoreService } from './../../store/services/tasks.store';
import { Observable } from 'rxjs/Observable';
import { Task } from './../../models/task';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TasksPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {

  /*tasks: Task[] = [
    { id: 1, title: 'Task 01', description: 'Desc 01'},
    { id: 2, title: 'Task 02', description: 'Desc 02'},
    { id: 3, title: 'Task 03', description: 'Desc 03'}
  ]*/

  tasks$: Observable<Task[]>;

  constructor(
    private store: TasksStoreService,
    private navStore: NavStoreService,
    private navCtrl: NavController //needed for ion-item-sliding
  ) {
  }

  ionViewDidLoad() {
    this.store.dispatchLoadAction();
    this.tasks$ = this.store.getTasks();
  }

  onAddTask() {
    //this.navCtrl.push('TaskFormPage');
    this.navStore.dispatchNavCtrlPushAction('TaskFormPage');
  }

  onEdit(task: Task){
    this.navStore.dispatchNavCtrlPushAction('TaskFormPage', task);
  }

  onRemove(id){
    this.store.dispatchRemoveAction(id);
  }
}
