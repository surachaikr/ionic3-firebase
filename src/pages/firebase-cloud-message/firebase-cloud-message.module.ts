import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirebaseCloudMessagePage } from './firebase-cloud-message';

@NgModule({
  declarations: [
    FirebaseCloudMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(FirebaseCloudMessagePage),
  ],
  exports: [
    FirebaseCloudMessagePage
  ]
})
export class FirebaseCloudMessagePageModule {}
