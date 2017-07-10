import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-navigation-popover-child',
  templateUrl: 'navigation-popover-child.html',
})
export class NavigationPopoverChildPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewController: ViewController) {
  }

  public popPage() {
    this.navCtrl.pop();
  }

  public dismissPage() {
    this.viewController.dismiss();
  }

  public dismissWithReturnData() {
    this.viewController.dismiss({data: this.navParams.get('data')+1}); 
  }
}
