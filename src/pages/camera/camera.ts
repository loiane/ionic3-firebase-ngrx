import { CameraStoreService } from './../../store/services/camera.store';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, AlertController, NavController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  image$: Observable<string>;
  error$: Observable<any>;

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private domSanitizer: DomSanitizer,
    private store: CameraStoreService
  ) { }

  ionViewDidLoad() {
    this.image$ = this.store.getPicture();
    this.error$ = this.store.getError();
  }

  onTakePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: 0, //this.camera.DestinationType.DATA_URL,
      saveToPhotoAlbum: true,
      mediaType: 0 //this.camera.MediaType.PICTURE
    }

    this.store.dispatchTakePictureAction(options);
  }

}
