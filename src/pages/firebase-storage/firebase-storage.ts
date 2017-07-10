import { IonicPage, NavController, Platform, LoadingController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { Component, NgZone } from '@angular/core';
import firebase from "firebase";

/**
 * Generated class for the FirebaseStoragePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-firebase-storage',
  templateUrl: 'firebase-storage.html',
})
export class FirebaseStoragePage {
  public currentUser: firebase.User = null;
  public photos: any;
  public isCordova: boolean = false;
  public zone: NgZone;

  constructor(public navCtrl: NavController, public platform: Platform, public cam: Camera, public loadingCtrl: LoadingController) {
    this.photos = [];
    this.zone = new NgZone({});

    platform.ready().then(() => {
      this.isCordova = platform.is('cordova');
    });
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      this.currentUser = user;
      if (this.currentUser) {
        let me = this;
        firebase.database().ref(`/photos/${this.currentUser.uid}`)
          .on('child_added', snapShot => {
            console.log('child add: ', JSON.stringify(snapShot));
            me.zone.run(() => {
              me.photos.push(snapShot.val());
            });
          });
      }
      unsubscribe();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirebaseStoragePage');
  }

  goToAuthen() {
    this.navCtrl.pop();
    this.navCtrl.push('FirebaseAuthenPage');
  }

  addImage() {
    const loading = this.loadingCtrl.create();
    this.cam.getPicture({
      quality: 95,
      destinationType: this.cam.DestinationType.DATA_URL,
      sourceType: this.cam.PictureSourceType.CAMERA,
      encodingType: this.cam.EncodingType.PNG,
      saveToPhotoAlbum: true
    }).then(imageData => {
      //Save picture to database
      firebase.database().ref(`/photos/${this.currentUser.uid}`)
        .push().then(newDbPhoto => {
          firebase.storage().ref('/photos/').child(this.currentUser.uid)
            .child(newDbPhoto.key)
            .putString(imageData, 'base64', { contentType: 'image/png' })
            .then((savePhoto) => {
              firebase.database().ref(`/photos/${this.currentUser.uid}`)
                .child(newDbPhoto.key).set(savePhoto.downloadURL).then(snap => {
                  console.log('Photo at url: ', savePhoto.downloadURL);
                  loading.dismiss();
                });
            });
        });
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
      loading.dismiss();
    });
    loading.present();
  }
}
