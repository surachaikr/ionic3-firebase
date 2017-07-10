import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataSubmitToServerPage } from './data-submit-to-server';

@NgModule({
  declarations: [
    DataSubmitToServerPage,
  ],
  imports: [
    IonicPageModule.forChild(DataSubmitToServerPage),
  ],
  exports: [
    DataSubmitToServerPage
  ]
})
export class DataSubmitToServerPageModule {}
