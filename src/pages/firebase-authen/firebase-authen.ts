import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, Platform } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook";
import firebase from "firebase";

/**
 * Generated class for the FirebaseAuthenPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-firebase-authen',
  templateUrl: 'firebase-authen.html',
})
export class FirebaseAuthenPage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public fb: Facebook, public platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirebaseAuthenPage');
  }

  loginAnonymous() {
    const loading = this.loadingCtrl.create();
    loading.present();
    firebase.auth().signInAnonymously().then(() => {
      loading.dismiss();
    });
  }

  loginEmail() {
    this.navCtrl.push('LoginEmailPage');
  }

  loginFacebook() {
    if(this.platform.is('ios') || this.platform.is('android')) {
      this.loginFacdbook_Native();
    }else{
      this.loginFacebook_Web();
    }
  }

  private loginFacebook_Web() {
        let provider = new firebase.auth.FacebookAuthProvider();
        provider.addScope('public_profile');
        provider.addScope('email');
        provider.setCustomParameters({
          'display': 'popup'
        });
        firebase.auth().signInWithPopup(provider).then((result) => {
          console.log('accessToken = ', result.credential.accessToken);
          console.log('User = ', JSON.stringify(result.user));
        }).catch((err) => {
          console.log("Firebase Error: ", err);
        });
  }

  private loginFacdbook_Native() {
    this.fb.login(['public_profile', 'email']).then((res: FacebookLoginResponse) => {
      let credential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
      firebase.auth().signInWithCredential(credential).then(user => {
        console.log("User: ", JSON.stringify(user));
      }).catch(err => {
        console.log("Firebase Error: ", err);
      });
    }).catch(err => {
      console.log("Facebook Error: ", err);
    });
  }
}
