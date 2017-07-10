import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FontAwesomePage } from './font-awesome';

@NgModule({
  declarations: [
    FontAwesomePage,
  ],
  imports: [
    IonicPageModule.forChild(FontAwesomePage),
  ],
  exports: [
    FontAwesomePage
  ]
})
export class FontAwesomePageModule {}
