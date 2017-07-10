import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Validator } from "../../libs/util";
import firebase from "firebase";

/**
 * Generated class for the LoginEmailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login-email',
  templateUrl: 'login-email.html',
})
export class LoginEmailPage {
public loginForm: FormGroup;
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {

    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validator.email])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginEmailPage');
  }

  loginUser() {
    if (!this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      firebase.auth().signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
        .then(() => {
          loading.dismiss().then(() => {
            this.navCtrl.pop();
          });
        }, (error) => {
          loading.dismiss().then(() => {
            let alert = this.alertCtrl.create({
              message: error.message,
              buttons: [
                {
                  text: "Ok", role: 'cancel'
                }]
            });
            alert.present();
          });
        });
      const loading = this.loadingCtrl.create();
      loading.present();
    }
  }

  goToResetPassword() {
    this.navCtrl.pop();
    this.navCtrl.push('ResetPasswordPage');
  }

  goToSignup() {
    this.navCtrl.pop();
    this.navCtrl.push('SignupEmailPage');
  }
}
