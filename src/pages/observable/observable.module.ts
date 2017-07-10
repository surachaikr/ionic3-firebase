import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObservablePage } from './observable';

@NgModule({
  declarations: [
    ObservablePage,
  ],
  imports: [
    IonicPageModule.forChild(ObservablePage),
  ],
  exports: [
    ObservablePage
  ]
})
export class ObservablePageModule {}
