import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { Base } from '../libs/base';
import firebase from "firebase";
import { Http } from '@angular/http';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'HomePage';

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    public translateService: TranslateService, public storage: Storage,
    public http: Http) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.initApp();
    });
  }

  initApp() {
    Base._http = this.http;
    Base._platform = this.platform;
    
    //set application language
    this.translateService.setDefaultLang('en-US');

    console.log('load in app.component.ts');

    this.storage.ready().then(() => {
      //prepared for use in class extends
      Base._storage = this.storage;
      Base._translateService = this.translateService;

      this.storage.get('currentLanguage').then((val) => {
        if (val) {
          this.translateService.use(val);
        } else {
          this.translateService.use('en-US');
          this.storage.set('currentLanguage', 'en-US');
        }
      });
    });

    firebase.initializeApp({
      apiKey: "AIzaSyCJxaQJ0uCKXLlFGkcOhbyY9quo2NMjFBQ",
      authDomain: "ionic3firebase.firebaseapp.com",
      databaseURL: "https://ionic3firebase.firebaseio.com",
      projectId: "ionic3firebase",
      storageBucket: "ionic3firebase.appspot.com",
      messagingSenderId: "680123526449"
    });
    
  }
}

