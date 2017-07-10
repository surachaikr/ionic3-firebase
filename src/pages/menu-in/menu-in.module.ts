import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuInPage } from './menu-in';

@NgModule({
  declarations: [
    MenuInPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuInPage),
  ],
  exports: [
    MenuInPage
  ]
})
export class MenuInPageModule {}
