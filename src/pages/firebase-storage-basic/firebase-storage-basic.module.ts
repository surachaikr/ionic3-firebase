import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirebaseStorageBasicPage } from './firebase-storage-basic';

@NgModule({
  declarations: [
    FirebaseStorageBasicPage,
  ],
  imports: [
    IonicPageModule.forChild(FirebaseStorageBasicPage),
  ],
})
export class FirebaseStorageBasicPageModule {}
