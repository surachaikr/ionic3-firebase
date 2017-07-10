import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-upload-file',
  templateUrl: 'upload-file.html',
})
export class UploadFilePage {
  public fileItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  public uploadFile(file: any) {
    this.fileItem = file;
  }
}
