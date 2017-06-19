import { IBaseForm } from './../../components/base-form/ibase-form';
import { BaseFormComponent } from './../../components/base-form/base-form';
import { AuthStoreService } from './../../store/services/auth.store';
import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage extends BaseFormComponent implements OnInit, IBaseForm {

  constructor(
    private fb: FormBuilder,
    private authStoreService: AuthStoreService
  ) {
    super();
  }

  ngOnInit() {
    this.initForm();
    this.error$ = this.authStoreService.getAuthError();
  }

  initForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSave(){
    this.authStoreService.dispatchLoginAction(this.form.value);
  }
}
