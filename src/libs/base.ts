import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';

export class Base {
    public Base() {
    }

    public static _translateService: TranslateService;
    public static _storage: Storage;
    public static _http: Http;
    public static _platform: Platform;

    public translateService: TranslateService = Base._translateService;
    public storage: Storage = Base._storage;
    public http: Http = Base._http;
    public platform: Platform = Base._platform;

    public static changeLanguage(language: string) {
        Base._translateService.use(language);
        Base._storage.ready().then(() => {
            Base._storage.set('currentLanguage', language);
            //window.location.reload();
        });
    }
}
