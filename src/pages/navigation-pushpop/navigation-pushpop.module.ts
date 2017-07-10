import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavigationPushpopPage } from './navigation-pushpop';

@NgModule({
  declarations: [
    NavigationPushpopPage,
  ],
  imports: [
    IonicPageModule.forChild(NavigationPushpopPage),
  ],
  exports: [
    NavigationPushpopPage
  ]
})
export class NavigationPushpopPageModule {}
