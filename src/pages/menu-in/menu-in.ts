import { Component } from '@angular/core';
import { IonicPage, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-menu-in',
  templateUrl: 'menu-in.html',
})
export class MenuInPage {

  constructor(public menuController: MenuController ) {
  }
  
  public openLocalMenu() {
    this.menuController.open('localMenu');
  }

}
