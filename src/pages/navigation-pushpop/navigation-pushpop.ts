import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-navigation-pushpop',
  templateUrl: 'navigation-pushpop.html',
})
export class NavigationPushpopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public pushPage() {
    this.navCtrl.push('NavigationPushpopChildPage');
  }

  public pushPageWithData() {
    this.navCtrl.push('NavigationPushpopChildPage', { data: 987 });
  }
}
