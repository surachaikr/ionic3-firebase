import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavigationPopoverChildPage } from './navigation-popover-child';

@NgModule({
  declarations: [
    NavigationPopoverChildPage,
  ],
  imports: [
    IonicPageModule.forChild(NavigationPopoverChildPage),
  ],
  exports: [
    NavigationPopoverChildPage
  ]
})
export class NavigationPopoverChildPageModule {}
