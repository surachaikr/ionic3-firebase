import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import firebase from "firebase";

/**
 * Generated class for the FirebaseDatabasePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-firebase-database',
  templateUrl: 'firebase-database.html',
})
export class FirebaseDatabasePage {
  public dataList = [];
  public currentUser: firebase.User = null;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      this.currentUser = user;
      if (this.currentUser) {
        firebase.database().ref('/notes').child(this.currentUser.uid)
          .on('child_added', snap => {
            console.log("new child: ", JSON.stringify(snap));
            this.dataList.push(snap);
          });
        firebase.database().ref('/notes').child(this.currentUser.uid)
          .on('child_removed', snap => {
            console.log("remove child: ", JSON.stringify(snap));
            this.removeItem(snap.key);
          });
      }
      unsubscribe();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirebaseDatabasePage');
  }

  ionViewDidLeave() {
    if (this.currentUser) {
      firebase.database().ref('/notes').child(this.currentUser.uid)
        .off('child_added', () => {
          console.log("stop connect");
        });
    }
  }

  goToAuthen() {
    this.navCtrl.pop();
    this.navCtrl.push('FirebaseAuthenPage');
  }

  addNew() {
    let alert = this.alertCtrl.create({
      title: 'Add new note',
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
        {
          name: 'note',
          placeholder: 'Note message'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Save',
          handler: data => {
            firebase.database().ref('/notes').child(this.currentUser.uid).push({
              title: data.title,
              note: data.note
            });
          }
        }
      ]
    });

    alert.present();

  }

  deleteNote(key) {
    console.log('Delete key = ', key);
    firebase.database().ref('/notes').child(this.currentUser.uid).child(key).remove();
  }

  private removeItem(key) {
    console.log("removeItem key: ", key);
    if(this.dataList && this.dataList.length > 0) {
      for(let i=0; i<this.dataList.length; i++) {
        if(this.dataList[i].key == key) {
          this.dataList.splice(i, 1);
          break;
        }
      }
    }
  }

}
