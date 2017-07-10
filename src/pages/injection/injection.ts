import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { UseProvider } from '../../providers/use/use';

@IonicPage()
@Component({
  selector: 'page-injection',
  templateUrl: 'injection.html',
})
export class InjectionPage {
  public textProvider: string;
  public textLocalObject: string;

  constructor(public useProvider: UseProvider) {
    this.textProvider = this.useProvider.getData();

    let localObj = new UseProvider();
    this.textLocalObject = localObj.getInformation();
  }
}
