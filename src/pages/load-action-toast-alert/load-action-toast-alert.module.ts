import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoadActionToastAlertPage } from './load-action-toast-alert';

@NgModule({
  declarations: [
    LoadActionToastAlertPage,
  ],
  imports: [
    IonicPageModule.forChild(LoadActionToastAlertPage),
  ],
  exports: [
    LoadActionToastAlertPage
  ]
})
export class LoadActionToastAlertPageModule {}
