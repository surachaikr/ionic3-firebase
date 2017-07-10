import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-navigation-pushpop-child',
  templateUrl: 'navigation-pushpop-child.html',
})
export class NavigationPushpopChildPage {
  public data: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public popPage() {
    this.navCtrl.pop();
  }
}
 