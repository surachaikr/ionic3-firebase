import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CameraExamplePage } from './camera-example';

@NgModule({
  declarations: [
    CameraExamplePage,
  ],
  imports: [
    IonicPageModule.forChild(CameraExamplePage),
  ],
  exports: [
    CameraExamplePage
  ]
})
export class CameraExamplePageModule {}
