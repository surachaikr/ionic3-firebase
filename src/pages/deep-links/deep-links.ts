import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

@IonicPage({
    name: 'deeplinks-demo',
    segment: 'deeplinks-demo-path/:id/:name',
    defaultHistory: ['HomePage', 'ThemePage']
})

@Component({
  selector: 'page-deep-links',
  templateUrl: 'deep-links.html',
})
export class DeepLinksPage {
  id: string;
  name: string;

  constructor(public navParams: NavParams) {
    this.id = this.navParams.get('id');
    this.name = this.navParams.get('name');
  }

}
