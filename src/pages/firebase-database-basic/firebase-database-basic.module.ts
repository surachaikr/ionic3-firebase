import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirebaseDatabaseBasicPage } from './firebase-database-basic';

@NgModule({
  declarations: [
    FirebaseDatabaseBasicPage,
  ],
  imports: [
    IonicPageModule.forChild(FirebaseDatabaseBasicPage),
  ],
})
export class FirebaseDatabaseBasicPageModule {}
