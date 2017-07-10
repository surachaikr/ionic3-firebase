import { Component } from '@angular/core';
import { IonicPage, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-observable-publish',
  templateUrl: 'observable-publish.html',
})
export class ObservablePublishPage {

  constructor(public events: Events) {
  }

  publishObs() {
    this.events.publish('firstname:lastname', 'Ionic', '3');
  }
}
