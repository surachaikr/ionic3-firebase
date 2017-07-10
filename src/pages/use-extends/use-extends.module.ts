import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UseExtendsPage } from './use-extends';
import { SharedModule } from '../../libs/shared.module';

@NgModule({
  declarations: [
    UseExtendsPage,
  ],
  imports: [
    IonicPageModule.forChild(UseExtendsPage),
    SharedModule
  ],
  exports: [
    UseExtendsPage
  ]
})
export class UseExtendsPageModule {}
