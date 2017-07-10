import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InputUploadFileComponent } from './input-upload-file';

@NgModule({
  declarations: [
    InputUploadFileComponent,
  ],
  imports: [
    IonicPageModule.forChild(InputUploadFileComponent),
  ],
  exports: [
    InputUploadFileComponent
  ]
})
export class InputUploadFileComponentModule {}
