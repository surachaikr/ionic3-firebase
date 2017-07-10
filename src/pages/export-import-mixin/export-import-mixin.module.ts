import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExportImportMixinPage } from './export-import-mixin';

@NgModule({
  declarations: [
    ExportImportMixinPage,
  ],
  imports: [
    IonicPageModule.forChild(ExportImportMixinPage),
  ],
  exports: [
    ExportImportMixinPage
  ]
})
export class ExportImportMixinPageModule {}
