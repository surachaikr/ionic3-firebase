import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import firebase from "firebase";

@IonicPage()
@Component({
  selector: 'page-firebase-storage-basic',
  templateUrl: 'firebase-storage-basic.html',
})
export class FirebaseStorageBasicPage {
  imageName: string;
  imageBase64: string;
  imageContentType: string;
  imageEncode: string;
  imageUrlSave: string;
  imageUrlLoad: string;
  imageBlob: any;
  metadata: string;
  message: string = "";

  constructor(public http: Http) {

  }

  ionViewDidLoad() {
    this.http.get('/assets/data/image-base64.json')
      .map(res => res.json())
      .subscribe(image => {
        this.imageName = image.name;
        this.imageBase64 = image.data;
        this.imageContentType = image.contentType;
        this.imageEncode = image.encode;
      });
  }

  saveImageToStorage() {
    firebase.storage().ref('/basic_photos')
      .child(this.imageName)
      .putString(this.imageBase64, this.imageEncode, { contentType: this.imageContentType })
      .then((savePhoto) => {
        firebase.database().ref('/basic_photos')
          .child(this.imageName).set(savePhoto.downloadURL).then(snap => {
            this.imageUrlSave = savePhoto.downloadURL;
          });
      }).catch((error) => {
        this.message = error.message;
      });
  }

  loadImageFromStorage() {
    firebase.storage().ref('/basic_photos').child(this.imageName).getDownloadURL().then((url) => {
      this.imageUrlLoad = url;
    }).catch((error) => {
      this.message = error.message;
    });
  }

  loadFileFromStorage() {
    firebase.storage().ref('/basic_photos').child(this.imageName).getDownloadURL().then((url) => {
      let xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = (event) => {
        let blob = xhr.response;
        let reader = new FileReader();
        reader.addEventListener("loadend", () => {
           console.log(reader.result)
        });
        reader.readAsArrayBuffer(blob);
      };
      xhr.open('GET', url);
      xhr.send();
    }).catch((error) => {
      this.message = error.message;
    });
  }

  delete() {
    firebase.storage().ref('/basic_photos').child(this.imageName).delete().then(() => {
      this.message = "deleted"
      this.imageUrlLoad = null;
      this.imageUrlSave = null;
    }).catch((error) => {
      this.message = error.message;
    });
  }

  loadMetadata() {
    firebase.storage().ref('/basic_photos').child(this.imageName).getMetadata().then((metadata) => {
      this.metadata = JSON.stringify(metadata);
    }).catch((error) => {
      this.message = error.message;
    });
  }

  saveMetadata() {
    let newMetadata: any = {
      contentEncoding: this.imageEncode,
      customMetadata: {
        'app': 'Ionic3Firebase',
        'objective': 'Training'
      }
    }
    firebase.storage().ref('/basic_photos').child(this.imageName).updateMetadata(newMetadata).then((metadata) => {
      this.metadata = JSON.stringify(metadata);
    }).catch((error) => {
      this.message = error.message;
    });
  }
}
