import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataSubmitWithProviderPage } from './data-submit-with-provider';

@NgModule({
  declarations: [
    DataSubmitWithProviderPage,
  ],
  imports: [
    IonicPageModule.forChild(DataSubmitWithProviderPage),
  ],
  exports: [
    DataSubmitWithProviderPage
  ]
})
export class DataSubmitWithProviderPageModule {}
