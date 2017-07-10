import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-promise',
  templateUrl: 'promise.html',
})
export class PromisePage {
  text: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.callRemote().then((result) => {
      console.log(result);
      this.text = result;
    });
    console.log('go on');
    this.text = 'go on';
  }

  callRemote() {
    return new Promise(resolve => {
      console.log('do something');
      this.text = 'do something';
      resolve('some value');
    })
  }

}
