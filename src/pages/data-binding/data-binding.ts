import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-data-binding',
  templateUrl: 'data-binding.html',
})
export class DataBindingPage {
  myValue: string = "danger";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  clickFunction() {
    this.myValue = "danger";
  }
}
