import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Task } from './../../models/task';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable()
export class TasksProvider {

  tasks$: FirebaseListObservable<any>;

  constructor(private db: AngularFireDatabase) {
    this.tasks$ = this.db.list('/tasks');
  }

  load(){
    return this.tasks$;
  }

  create(task: Task) {
    const newTask = Object.assign({}, task, {
      id: this.tasks$.push(task).key
    });
    return this.update(newTask.id, newTask);
  }


  update(id, task: Task) {

    const subject = new Subject();

    this.tasks$.update(id, task)
      .then(
        val => {
            subject.next(task);
            subject.complete();
        },
        err => {
            subject.error(err);
            subject.complete();
        }
    );

    return subject.asObservable();
  }

  remove(id){
    const subject = new Subject();
    this.tasks$.remove(id).then(
        val => {
            subject.next(id);
            subject.complete();
        },
        err => {
            subject.error(err);
            subject.complete();
        }
    );
    return subject.asObservable();
  }

}
