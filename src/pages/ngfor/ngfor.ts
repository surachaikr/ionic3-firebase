import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ngfor',
  templateUrl: 'ngfor.html',
})
export class NgforPage {
  public values: any = [1,2,3,4,5];
  public valuesJSON: any = [{'value': 'val1'}, {'value': 'val3'}, {'value': 'val3'}]
}
