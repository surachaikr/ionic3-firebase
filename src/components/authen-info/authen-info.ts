import { LoadingController } from 'ionic-angular';
import { Component, NgZone } from '@angular/core';
import firebase from "firebase";

@Component({
  selector: 'authen-info',
  templateUrl: 'authen-info.html'
})
export class AuthenInfoComponent {
  zone: NgZone;
  isAuthen: boolean = false;
  user: any;

  constructor(public loadingCtrl: LoadingController) {
    console.log('Hello AuthenInfoComponent Component');
    this.zone = new NgZone({});
    this.zone.run(() => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          console.log("user: ", JSON.stringify(user));
          this.isAuthen = true;
          this.user = user;
        } else {
          this.isAuthen = false;
          this.user = null;
        }
      });
    });

    this.user = firebase.auth().currentUser;
    if (this.user) {
      console.log("user: ", JSON.stringify(this.user));
      this.isAuthen = true;
      this.user = this.user;
    } else {
      this.isAuthen = false;
      this.user = null;
    }
  }

  logout() {
    const loading = this.loadingCtrl.create();
    loading.present();
    firebase.auth().signOut().then(() => {
      loading.dismiss();
    });
  }
}
