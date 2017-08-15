import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, Platform, AlertController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook";
import firebase from "firebase";

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@IonicPage()
@Component({
  selector: 'page-firebase-authen',
  templateUrl: 'firebase-authen.html',
})
export class FirebaseAuthenPage {
  //for phone authentication
  public recaptchaVerifier: firebase.auth.RecaptchaVerifier;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,
    public fb: Facebook, public platform: Platform,
    public alertCtrl: AlertController,
    public http: Http) {

    //for facebook and google login after redirect to this page
    firebase.auth().getRedirectResult().then((result) => {
      if (result.user) {
        console.log('accessToken = ', result.credential.accessToken);
        console.log('User = ', JSON.stringify(result));
      }
    });
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

  loginPhone() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        let prompt = this.alertCtrl.create({
          title: 'What is your mobile number?',
          inputs: [{ name: 'phoneNumber', placeholder: '66xxxxxxxxx' }],
          buttons: [
            {
              text: 'Cancel',
              handler: data => { }
            },
            {
              text: 'Login',
              handler: data => {
                const appVerifier = this.recaptchaVerifier;
                const phoneNumberString = "+" + data.phoneNumber;
                firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
                  .then(confirmationResult => {
                    this.showReceiveSMSCode(confirmationResult);
                  })
                  .catch((error) => {
                    console.error("SMS not sent", error);
                  });

              }
            }
          ]
        });
        prompt.present();
      }
    });
    this.recaptchaVerifier.render();
  }

  private showReceiveSMSCode(confirmationResult) {
    let prompt = this.alertCtrl.create({
      title: 'Enter the Confirmation code',
      inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
      buttons: [
        {
          text: 'Cancel',
          handler: data => { console.log('Cancel clicked'); }
        },
        {
          text: 'Verify',
          handler: data => {
            confirmationResult.confirm(data.confirmationCode)
              .then((result) => {
                console.log(result.user);
                // ...
              }).catch((error) => {
                //confirmation code is invalid
              });
          }
        }
      ]
    });
    prompt.present();
  }

  /*   loginFacebook() {
           if(this.platform.is('ios') || this.platform.is('android')) {
            this.loginFacdbook_Native();
          }else{
            this.loginFacebook_Web();
          } 
    } */

  public loginFacebook() {
    let provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('public_profile');
    provider.addScope('email');
    firebase.auth().signInWithRedirect(provider).then(() => {
    }).catch((err) => {
      console.log("Firebase Error: ", err);
    });
  }

  /*   private loginFacebook_Native() {
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
    } */

  loginGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/userinfo.email');
    provider.addScope('https://www.googleapis.com/auth/user.phonenumbers.read');
    firebase.auth().signInWithRedirect(provider).then(() => {

    }).catch((err) => {
      console.log("Firebase Error: ", err);
    });
  }

  loginCustom() {
    this.http.get('https://us-central1-ionic3firebase.cloudfunctions.net/customAuth?uid=surachai@actvee.com')
      .map(res => res.json())
      .subscribe(data => {
        //if (data.status) {
        firebase.auth().signInWithCustomToken(data.token).then((result) => {
          console.log('User = ', JSON.stringify(result.user));
        }).catch((err) => {
          console.log("Firebase Error: ", err);
        });
        //}
        console.log(JSON.stringify(data.token));
      });
  }
}
