import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlgoliaDemoPage } from './algolia-demo';

@NgModule({
  declarations: [
    AlgoliaDemoPage,
  ],
  imports: [
    IonicPageModule.forChild(AlgoliaDemoPage),
  ],
  exports: [
    AlgoliaDemoPage
  ]
})
export class AlgoliaDemoPageModule {}
