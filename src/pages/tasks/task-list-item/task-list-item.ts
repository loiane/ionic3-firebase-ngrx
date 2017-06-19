import { Task } from './../../../models/task';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'task-list-item',
  templateUrl: 'task-list-item.html'
})
export class TaskListItemComponent {

  @Input() task: Task;
  @Output() onEdit = new EventEmitter();
  @Output() onRemove = new EventEmitter();

  onEditClick(){
    this.onEdit.emit(this.task);
  }

  onDeleteClick(){
    this.onRemove.emit(this.task.id);
  }

}
