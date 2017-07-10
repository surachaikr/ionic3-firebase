import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { Platform, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BarcodeScannerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-barcode-scanner',
  templateUrl: 'barcode-scanner.html',
})
export class BarcodeScannerPage {
  public isDevice = false;
  public barcodeInfo = 'Click Scan Barcode to get info';

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public bc: BarcodeScanner) {
    platform.ready().then(() => {
      this.isDevice = platform.is('cordova');
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodeScannerPage');
  }

  scan() {
    this.bc.scan().then((barcodeData) => {
      // Success! Barcode data is here
      this.barcodeInfo = barcodeData.text;
    }, (err) => {
      // An error occurred
      console.log("Scan barcode error: ", err);
    });
  }
}
