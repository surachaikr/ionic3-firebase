import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoogleFontPage } from './google-font';

@NgModule({
  declarations: [
    GoogleFontPage,
  ],
  imports: [
    IonicPageModule.forChild(GoogleFontPage),
  ],
  exports: [
    GoogleFontPage
  ]
})
export class GoogleFontPageModule {}
