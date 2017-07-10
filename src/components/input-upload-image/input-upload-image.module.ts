import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InputUploadImageComponent } from './input-upload-image';

@NgModule({
  declarations: [
    InputUploadImageComponent,
  ],
  imports: [
    IonicPageModule.forChild(InputUploadImageComponent),
  ],
  exports: [
    InputUploadImageComponent
  ]
})
export class InputUploadImageComponentModule {}
