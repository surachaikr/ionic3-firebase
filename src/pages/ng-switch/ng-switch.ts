import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ng-switch',
  templateUrl: 'ng-switch.html',
})
export class NgSwitchPage {
  public value: number = 1;

  public set(val: number) {
    this.value = val;
  }
}
