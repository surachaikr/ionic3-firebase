import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirebaseDatabasePage } from './firebase-database';

@NgModule({
  declarations: [
    FirebaseDatabasePage,
  ],
  imports: [
    IonicPageModule.forChild(FirebaseDatabasePage),
  ],
  exports: [
    FirebaseDatabasePage
  ]
})
export class FirebaseDatabasePageModule {}
