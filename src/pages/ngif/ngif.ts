import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ngif',
  templateUrl: 'ngif.html',
})
export class NgifPage {
  public value: number = 1;

  public set(val: number) {
    this.value = val;
  }
}
