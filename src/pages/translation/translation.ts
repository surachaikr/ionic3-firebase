import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-translation',
  templateUrl: 'translation.html',
})
export class TranslationPage {
  public subject: string;

  constructor(public translateService: TranslateService, public storage: Storage, public navController: NavController) {

  }

  ionViewDidLoad() {
    this.translateService.onLangChange.subscribe(ev => {
      this.translateService.get('Ionic3_and_Firebase').subscribe(value => {
        this.subject = value;
      });
    });
    this.translateService.use(this.translateService.currentLang);
  }

  changeLanguage(language: string) {
    this.translateService.use(language);
    this.storage.ready().then(() => {
      this.storage.set('currentLanguage', language);
      //window.location.reload();
    });
  }

  goToHome() {
    this.navController.setRoot('HomePage');
  }

}
