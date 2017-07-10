import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as math from "../../libs/math"

@IonicPage()
@Component({
  selector: 'page-export-import',
  templateUrl: 'export-import.html',
})
export class ExportImportPage {
  text: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log("2π = " + math.sum(math.pi, math.pi));
    this.text = "2π = " + math.sum(math.pi, math.pi);
  }

}
