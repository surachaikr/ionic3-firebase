import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Base } from '../../libs/base';

@IonicPage()
@Component({
  selector: 'page-use-extends',
  templateUrl: 'use-extends.html',
})
export class UseExtendsPage extends Base {
  public subject: string;

  constructor(public navController: NavController) {
    super();
  }

  ionViewDidLoad() {
    this.translateService.onLangChange.subscribe(() => {
      this.translateService.get('Ionic3_and_Firebase').subscribe(value => {
        this.subject = value;
      });
    });
  }

  changeLanguage(language: string) {
    Base.changeLanguage(language);
  }

  goToHome() {
    this.navController.setRoot('HomePage');
  }
}
