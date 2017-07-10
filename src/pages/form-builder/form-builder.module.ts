import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormBuilderPage } from './form-builder';

@NgModule({
  declarations: [
    FormBuilderPage,
  ],
  imports: [
    IonicPageModule.forChild(FormBuilderPage),
  ],
  exports: [
    FormBuilderPage
  ]
})
export class FormBuilderPageModule {}
