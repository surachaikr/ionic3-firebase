import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from "firebase";

@IonicPage()
@Component({
  selector: 'page-firebaseui-authen-status',
  templateUrl: 'firebaseui-authen-status.html',
})
export class FirebaseuiAuthenStatusPage {

  signinStatus: boolean = false;
  accountProfile: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.signinStatus = true;
        user.getIdToken().then((accessToken) => {
          this.accountProfile = JSON.stringify({
            displayName: user.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            uid: user.uid,
            providerData: user.providerData,
            accessToken: accessToken
          }, null, '  ');
        });

      } else {
        //User no yet sign in
        this.signinStatus = false;
        this.accountProfile = "";
      }
    }, (error) => {
      console.log(error);
    });
  }

  signin() {
    this.navCtrl.push("FirebaseuiAuthenPage");
  }

  signout() {
    firebase.auth().signOut();
  }

}
