import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Camera, CameraOptions } from "@ionic-native/camera";

/**
 * Generated class for the CameraExamplePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-camera-example',
  templateUrl: 'camera-example.html',
})
export class CameraExamplePage {
  public isDevice = false;
  public imgSource = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public cam: Camera) {
    platform.ready().then(() => {
      this.isDevice = platform.is('cordova');
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraExamplePage');
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.cam.DestinationType.DATA_URL,
      encodingType: this.cam.EncodingType.JPEG,
      mediaType: this.cam.MediaType.PICTURE
    }

    this.cam.getPicture(options).then(picData => {
      this.imgSource = 'data:image/jpeg;base64,' + picData;
    }, err => {
      console.log('Error: ', err);
    });

  }
}
