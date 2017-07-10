import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExportImportPage } from './export-import';

@NgModule({
  declarations: [
    ExportImportPage,
  ],
  imports: [
    IonicPageModule.forChild(ExportImportPage),
  ],
  exports: [
    ExportImportPage
  ]
})
export class ExportImportPageModule {}
