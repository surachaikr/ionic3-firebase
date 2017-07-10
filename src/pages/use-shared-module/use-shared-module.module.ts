import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UseSharedModulePage } from './use-shared-module';
import { SharedModule } from '../../libs/shared.module';

@NgModule({
  declarations: [
    UseSharedModulePage,
  ],
  imports: [
    IonicPageModule.forChild(UseSharedModulePage),
    SharedModule
  ],
  exports: [
    UseSharedModulePage
  ]
})
export class UseSharedModulePageModule {}
