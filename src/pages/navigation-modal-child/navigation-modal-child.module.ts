import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavigationModalChildPage } from './navigation-modal-child';

@NgModule({
  declarations: [
    NavigationModalChildPage,
  ],
  imports: [
    IonicPageModule.forChild(NavigationModalChildPage),
  ],
  exports: [
    NavigationModalChildPage
  ]
})
export class NavigationModalChildPageModule {}
