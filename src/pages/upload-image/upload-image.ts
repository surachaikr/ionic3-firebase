import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-upload-image',
  templateUrl: 'upload-image.html',
})
export class UploadImagePage {

  public imageItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  uploadImage(image: any) {
    this.imageItem = image;
  }
}
