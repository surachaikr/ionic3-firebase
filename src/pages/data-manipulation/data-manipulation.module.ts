import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataManipulationPage } from './data-manipulation';

@NgModule({
  declarations: [
    DataManipulationPage,
  ],
  imports: [
    IonicPageModule.forChild(DataManipulationPage),
  ],
  exports: [
    DataManipulationPage
  ]
})
export class DataManipulationPageModule {}
