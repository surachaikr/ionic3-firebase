import { Component } from '@angular/core';
import { IonicPage, NavController, Loading, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Validator } from "../../libs/util";
import firebase from "firebase";

/**
 * Generated class for the SignupEmailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup-email',
  templateUrl: 'signup-email.html',
})
export class SignupEmailPage {
  public signupForm: FormGroup;
  loading: Loading;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {

    this.signupForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validator.email])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupEmailPage');
  }

  signupUser() {
    if (!this.signupForm.valid) {
      console.log(this.signupForm.value);
    } else {
      firebase.auth().createUserWithEmailAndPassword(this.signupForm.value.email, this.signupForm.value.password)
      .then(() => {
          this.loading.dismiss().then(() => {
            this.navCtrl.pop();
          });
        }, (error) => {
          this.loading.dismiss().then(() => {
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
      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }
  }
}
