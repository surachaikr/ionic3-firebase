import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UploadImagePage } from './upload-image';
import { InputUploadImageComponentModule } from '../../components/input-upload-image/input-upload-image.module';

@NgModule({
  declarations: [
    UploadImagePage,
  ],
  imports: [
    InputUploadImageComponentModule,
    IonicPageModule.forChild(UploadImagePage),
  ],
  exports: [
    UploadImagePage
  ]
})
export class UploadImagePageModule {}
