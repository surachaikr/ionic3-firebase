import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from "firebase";
import firebaseui from "firebaseui";

@IonicPage()
@Component({
  selector: 'page-firebaseui-authen',
  templateUrl: 'firebaseui-authen.html',
})
export class FirebaseuiAuthenPage {
  ui: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    let uiConfig = {
      callbacks: {
        signInSuccess: (currentUser) => {
          this.navCtrl.push("FirebaseuiAuthenStatusPage");
          return false;
        }
      },
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        {
          provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          recaptchaParameters: {
            type: 'image', // 'audio'
            size: 'invisible', // 'normal' or 'compact'
            badge: 'bottomleft' //' bottomright' or 'inline' applies to invisible.
          },
          defaultCountry: 'TH' // Set default country to the United Kingdom (+44).
        }
      ],
      
      tosUrl: '<your-tos-url>' // Terms of service url.
    };


    if (!firebaseui.auth.AuthUI.getInstance()) {
      // Initialize the FirebaseUI Widget using Firebase.
      this.ui = new firebaseui.auth.AuthUI(firebase.auth());
    } else {
      this.ui = firebaseui.auth.AuthUI.getInstance();
      this.ui.reset();
    }
    // The start method will wait until the DOM is loaded.
    this.ui.start('#firebaseui-auth-container', uiConfig);

  }

}
