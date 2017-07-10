import { Component } from '@angular/core';
import { IonicPage, Platform } from 'ionic-angular';

import firebase from "firebase";
import { Firebase } from '@ionic-native/firebase';

@IonicPage()
@Component({
  selector: 'page-firebase-cloud-message',
  templateUrl: 'firebase-cloud-message.html',
})
export class FirebaseCloudMessagePage {
  public message: string;
  public output: string;
  public token: string;
  public name: string;

  constructor(private firebaseN: Firebase, private platform: Platform) {
  }

  startNotify() {
    if (this.platform.is('cordova')) {
      this.notificationOnCordova();
    } else {
      this.notificationOnWeb();
    }
  }

  callPingPong() {
    firebase.auth().signInAnonymously().then((user) => {
      console.log("uid = " + user.uid);
      console.log(user.isAnonymous); // true
      firebase.database().ref('messages/' + this.token).set({
        ionic3firebase: this.name
      });
    });
  }

  notificationOnCordova() {

    this.firebaseN.getToken().then(currentToken => {
      this.token = currentToken;
      this.message = 'Your cordova token is ' + currentToken;
    }).catch(err => {
      this.message = 'An error occurred while retrieving cordova token. ' + err;
    });

    this.firebaseN.onTokenRefresh().subscribe(refreshedToken => {
      this.token = refreshedToken;
      this.message = 'Your cordova refresh token is ' + refreshedToken;
    }, (err) => {
      this.message = 'Unable to retrieve cordova refreshed token ' + err;
    });

    if (this.platform.is('ios')) {
      this.firebaseN.grantPermission().then(() => {
        this.onNotificationOpen();
      }).catch(err => {
        this.message = 'Unable to get permission to notify cordova with ' + err;
      });
    } else {
      this.onNotificationOpen();
    }
  }

  onNotificationOpen() {
    this.firebaseN.onNotificationOpen().subscribe((payload) => {
      if(payload.tap) {
        this.message = "Message received when backgroud. " + payload.welcome + "->" + JSON.stringify(payload);
      } else {
        this.message = "Message received whe foregroud. " + payload.welcome + "->" + JSON.stringify(payload);
      }
      
    }, (err) => {
      this.message = 'Unable to retrieve cordova payload ' + err;
    });
  }

  notificationOnWeb() {
    let messaging = firebase.messaging();
    messaging.requestPermission().then(() => {
      messaging.getToken().then(currentToken => {
        this.token = currentToken;
        console.log(currentToken)
        this.message = 'Your token is ' + currentToken;
      }).catch(err => {
        this.message = 'An error occurred while retrieving token. ' + err;
      });

      messaging.onTokenRefresh(() => {
        messaging.getToken().then(refreshedToken => {
          this.token = refreshedToken;
          this.message = 'Your refresh token is ' + refreshedToken;
        }).catch(err => {
          this.message = 'Unable to retrieve refreshed token ' + err;
        });
      });

      messaging.onMessage(payload => {
        console.log(payload);
        this.message = "Message received. " + payload.data.welcome + "->" + JSON.stringify(payload);
      });

    }).catch(err => {
      this.message = 'Unable to get permission to notify with ' + err;
    });
  }

}
