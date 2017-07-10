import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-view-controller',
  templateUrl: 'view-controller.html',
})
export class ViewControllerPage {
  public text: string;

  constructor(public viewController: ViewController) {
  }

  ionViewDidLoad() {
    //ViewController will control ionic content area
    this.viewController.contentRef().nativeElement.style.backgroundColor = '#819FF7';
  }

}
