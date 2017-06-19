import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@IonicPage()
export class HomePage {

  tasksRoot = 'TasksPage';
  cameraRoot = 'CameraPage';

  constructor(public navCtrl: NavController) {}

}
