import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InjectionPage } from './injection';

@NgModule({
  declarations: [
    InjectionPage,
  ],
  imports: [
    IonicPageModule.forChild(InjectionPage),
  ],
  exports: [
    InjectionPage
  ]
})
export class InjectionPageModule {}
