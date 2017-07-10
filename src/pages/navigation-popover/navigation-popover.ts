import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-navigation-popover',
  templateUrl: 'navigation-popover.html',
})
export class NavigationPopoverPage {
  text: any;
  public data: number = 456;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public popoverController: PopoverController) {
  }

  public popOverPage(popEvent) {
    let popOver = this.popoverController.create('NavigationPopoverChildPage', {data: this.data});
    popOver.present({ ev: popEvent }).then(() => {
      popOver.onDidDismiss((result) => {
        this.text = 'on did dismiss ' + JSON.stringify(result);
        console.log('on did dismiss ' + JSON.stringify(result));
        if (result) {
          this.data = result.data;
        }
      });
    });
  }

}
