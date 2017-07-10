import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirebaseCloudFunctionPage } from './firebase-cloud-function';

@NgModule({
  declarations: [
    FirebaseCloudFunctionPage,
  ],
  imports: [
    IonicPageModule.forChild(FirebaseCloudFunctionPage),
  ],
  exports: [
    FirebaseCloudFunctionPage
  ]
})
export class FirebaseCloudFunctionPageModule {}
