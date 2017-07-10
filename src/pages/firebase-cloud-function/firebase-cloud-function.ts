import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-firebase-cloud-function',
  templateUrl: 'firebase-cloud-function.html',
})
export class FirebaseCloudFunctionPage {
  public output: string = 'original';

  constructor(public http: Http) {
  }

  callCloudFunction() {
    this.http.get('https://us-central1-ionic3firebase.cloudfunctions.net/adjustData?text=' + this.output)
      .map(res => res.json())
      .subscribe(data => {
        this.output = data.data;
      });
  }

}
