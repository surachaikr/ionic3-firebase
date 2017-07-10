import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-storage',
  templateUrl: 'storage.html',
})
export class StoragePage {
  public text: string;

  constructor(storage: Storage) {
    storage.ready().then(() => {
      storage.set('coursename', 'Ionic3 training').then(() => {
        storage.get('coursename').then((val) => {
          this.text = 'Course is ' + val;
        })
      });
    });
  }
}
