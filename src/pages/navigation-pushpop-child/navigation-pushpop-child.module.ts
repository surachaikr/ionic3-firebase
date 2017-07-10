import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavigationPushpopChildPage } from './navigation-pushpop-child';

@NgModule({
  declarations: [
    NavigationPushpopChildPage,
  ],
  imports: [
    IonicPageModule.forChild(NavigationPushpopChildPage),
  ],
  exports: [
    NavigationPushpopChildPage
  ]
})
export class NavigationPushpopChildPageModule {}
