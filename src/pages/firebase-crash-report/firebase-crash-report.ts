import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase';

@IonicPage()
@Component({
  selector: 'page-firebase-crash-report',
  templateUrl: 'firebase-crash-report.html',
})
export class FirebaseCrashReportPage {
  message: string = 'start..';
  error: string;

  constructor(private firebaseN: Firebase) {
  }

  sendError() {
    this.firebaseN.logError(this.error).then(result => {
      this.message = 'log result: ' + JSON.stringify(result);
    }, rejectReason => {
      this.message = 'log result: ' + JSON.stringify(rejectReason);
    });
  }

  ionViewDidLoad() {
    /*     let settings = {
          developerModeEnabled: true
        }
        this.firebaseN.setConfigSettings(settings);
        this.firebaseN.fetch(0).then(() => {
          this.message = 'Already fetch';
    
          this.firebaseN.activateFetched().then(activated => {
            this.message = 'Activate fetch';
            if (activated) {
              this.message = 'Already activated';
            } else {
              this.message = 'Unactivated';
            }
          }, err => {
            this.message = 'Unable to activate:' + err;
          });
        }, err => {
          this.message = 'Unable to fetch:' + err;
        }) */
  }
  getData() {
    /*     this.message = 'Get value';
        try {
        this.firebaseN.getValue('ionic_promo').then(value => {
          //
          this.message = 'Value: ' + JSON.stringify(value);
        }, (err) => {
          this.message = 'Unable get value:' + err;
        });
        } catch (err) {
          this.message = 'Error:' + err;
        } */
  }

}
