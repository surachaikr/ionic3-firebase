import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeepLinksPage } from './deep-links';

@NgModule({
  declarations: [
    DeepLinksPage,
  ],
  imports: [
    IonicPageModule.forChild(DeepLinksPage),
  ],
  exports: [
    DeepLinksPage
  ]
})
export class DeepLinksPageModule {}
