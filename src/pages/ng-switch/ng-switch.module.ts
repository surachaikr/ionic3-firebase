import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NgSwitchPage } from './ng-switch';

@NgModule({
  declarations: [
    NgSwitchPage,
  ],
  imports: [
    IonicPageModule.forChild(NgSwitchPage),
  ],
  exports: [
    NgSwitchPage
  ]
})
export class NgSwitchPageModule {}
