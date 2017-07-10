import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-navigation-modal',
  templateUrl: 'navigation-modal.html',
})
export class NavigationModalPage {
  text: any;
  public data: number = 123;

  constructor(public modalController: ModalController) {
  }

  public modalPage() {
    let modalPage = this.modalController.create('NavigationModalChildPage', {data: this.data});
    modalPage.present().then(() => {
      modalPage.onDidDismiss(result => {
        console.log('on did dismiss ' + JSON.stringify(result));
        this.text = 'on did dismiss ' + JSON.stringify(result);
        if (result) {
          this.data = result.data;
        }
      });
    });
  }

}
