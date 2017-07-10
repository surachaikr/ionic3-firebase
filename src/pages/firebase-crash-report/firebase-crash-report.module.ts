import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirebaseCrashReportPage } from './firebase-crash-report';

@NgModule({
  declarations: [
    FirebaseCrashReportPage,
  ],
  imports: [
    IonicPageModule.forChild(FirebaseCrashReportPage),
  ],
  exports: [
    FirebaseCrashReportPage
  ]
})
export class FirebaseCrashReportPageModule {}
