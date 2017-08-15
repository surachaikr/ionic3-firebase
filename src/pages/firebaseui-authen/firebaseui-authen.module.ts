import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirebaseuiAuthenPage } from './firebaseui-authen';

@NgModule({
  declarations: [
    FirebaseuiAuthenPage,
  ],
  imports: [
    IonicPageModule.forChild(FirebaseuiAuthenPage),
  ],
})
export class FirebaseuiAuthenPageModule {}
