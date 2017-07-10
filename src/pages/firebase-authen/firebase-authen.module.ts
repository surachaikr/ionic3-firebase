import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirebaseAuthenPage } from './firebase-authen';
import { AuthenInfoComponentModule } from "../../components/authen-info/authen-info.module";

@NgModule({
  declarations: [
    FirebaseAuthenPage,
  ],
  imports: [
    IonicPageModule.forChild(FirebaseAuthenPage),
    AuthenInfoComponentModule
  ],
  exports: [
    FirebaseAuthenPage
  ]
})
export class FirebaseAuthenPageModule {}
