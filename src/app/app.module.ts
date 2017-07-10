import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule, Http } from '@angular/http';

import { MyApp } from './app.component';
import { UseProvider } from '../providers/use/use';
import { StructureComponentIonicComponentModule } from '../components/structure-component-ionic/structure-component-ionic.module';
import { StructureProviderIonicProvider } from '../providers/structure-provider-ionic/structure-provider-ionic';
import { StructurePipeIonicPipeModule } from '../pipes/structure-pipe-ionic/structure-pipe-ionic.module';
import { StructureDirectiveIonicDirectiveModule } from '../directives/structure-directive-ionic/structure-directive-ionic.module';
import { UserDefinedComponentModule } from '../components/user-defined/user-defined.module';
import { UserDefinedInputOutputComponentModule } from '../components/user-defined-input-output/user-defined-input-output.module';
import { InputUploadFileComponentModule } from '../components/input-upload-file/input-upload-file.module';
import { InputUploadImageComponentModule } from '../components/input-upload-image/input-upload-image.module';
import { IonicStorageModule } from '@ionic/storage';
import { DataServerProvider } from '../providers/data-server/data-server';

import { SharedModule } from '../libs/shared.module';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { Camera } from "@ionic-native/camera";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { Firebase } from '@ionic-native/firebase';
import { Geolocation } from "@ionic-native/geolocation";
import { Facebook } from "@ionic-native/facebook";

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

class CameraMock extends Camera {
  getPicture(options) {
    return new Promise((resolve, reject) => {
      resolve(`iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAE0lEQVQYV2P89evXfwYkwEi6AAB1Dg+5U+aHLQAAAABJRU5ErkJggg==`);
    });
  }
}

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: 'ionic3andfirebase',
         driverOrder: ['localstorage', 'sqlite', 'indexeddb']
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    SharedModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,

    StructureComponentIonicComponentModule,
    UserDefinedComponentModule,
    UserDefinedInputOutputComponentModule,
    InputUploadFileComponentModule,
    InputUploadImageComponentModule,

    StructurePipeIonicPipeModule,

    StructureDirectiveIonicDirectiveModule,

    StructureProviderIonicProvider,
    UseProvider,

    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataServerProvider,

    //{ provide: Camera, useClass: CameraMock },
    Camera,
    BarcodeScanner,
    Firebase,
    Geolocation,
    Facebook
  ]
})
export class AppModule {}
