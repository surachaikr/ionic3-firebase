import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavigationPopoverPage } from './navigation-popover';

@NgModule({
  declarations: [
    NavigationPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(NavigationPopoverPage),
  ],
  exports: [
    NavigationPopoverPage
  ]
})
export class NavigationPopoverPageModule {}
