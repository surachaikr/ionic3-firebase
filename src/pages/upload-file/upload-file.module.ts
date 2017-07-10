import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UploadFilePage } from './upload-file';
import { InputUploadFileComponentModule } from '../../components/input-upload-file/input-upload-file.module';

@NgModule({
  declarations: [
    UploadFilePage,
  ],
  imports: [
    InputUploadFileComponentModule,
    IonicPageModule.forChild(UploadFilePage),
  ],
  exports: [
    UploadFilePage
  ]
})
export class UploadFilePageModule {}
