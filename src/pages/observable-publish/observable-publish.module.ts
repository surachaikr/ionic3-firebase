import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObservablePublishPage } from './observable-publish';

@NgModule({
  declarations: [
    ObservablePublishPage,
  ],
  imports: [
    IonicPageModule.forChild(ObservablePublishPage),
  ],
  exports: [
    ObservablePublishPage
  ]
})
export class ObservablePublishPageModule {}
