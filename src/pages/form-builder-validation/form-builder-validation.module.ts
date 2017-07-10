import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormBuilderValidationPage } from './form-builder-validation';

@NgModule({
  declarations: [
    FormBuilderValidationPage,
  ],
  imports: [
    IonicPageModule.forChild(FormBuilderValidationPage),
  ],
  exports: [
    FormBuilderValidationPage
  ]
})
export class FormBuilderValidationPageModule {}
