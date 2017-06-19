import { IBaseForm } from './ibase-form';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'base-form',
  template: '<div></div>'
})
export class BaseFormComponent implements IBaseForm {

  form: FormGroup;
  error$: Observable<any>;

  constructor() {}

  validateField(name){
    let field = this.form.get(name);
    return !field.valid && (field.dirty || field.touched);
  }

  onSubmit(){
    this.form.invalid ?
      Object.keys(this.form.controls).forEach(
        control => this.form.get(control).errors ? this.form.get(control).markAsDirty() : null
      )
      : this.onSave();
  }

  onSave(){
    throw new Error("Method not implemented.");
  }

  initForm() {
    throw new Error("Method not implemented.");
  }

}
