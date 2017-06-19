import { Task } from './../../models/task';
import { NavStoreService } from './../../store/services/nav.store';
import { IBaseForm } from './../../components/base-form/ibase-form';
import { TasksStoreService } from './../../store/services/tasks.store';
import { BaseFormComponent } from './../../components/base-form/base-form';
import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-task-form',
  templateUrl: 'task-form.html',
})
export class TaskFormPage extends BaseFormComponent implements OnInit, IBaseForm {

  createTitle = 'Create new task';
  updateTitle = 'Update task';
  title: string = this.createTitle;
  taskId: string;
  isNew: boolean = true;

  constructor(
    private fb: FormBuilder,
    private store: TasksStoreService,
    private navStore: NavStoreService
  ) {
      super();
  }

  ionViewDidLoad() { }

  ngOnInit() {

    this.initForm();

    this.navStore.getPageParams()
      .subscribe((params: Task) => {
        if (params){
          this.title = this.updateTitle;
          this.form.setValue({
            title: params.title,
            description: params.description
          });
          this.taskId = params.id;
          this.isNew = false;
        }
      })

    //this.error$ = this.authStoreService.getAuthError();
  }

  initForm() {

    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ''
    });
  }

  onSave(){
    this.isNew
    ? this.store.dispatchCreateAction(this.form.value)
    : this.store.dispatchUpdateAction({
      id: this.taskId,
      title: this.form.value.title,
      description: this.form.value.description
    });
  }

}
