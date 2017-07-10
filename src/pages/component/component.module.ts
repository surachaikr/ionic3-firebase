import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentPage } from './component';
import { UserDefinedComponentModule } from '../../components/user-defined/user-defined.module';
import { UserDefinedInputOutputComponentModule } from '../../components/user-defined-input-output/user-defined-input-output.module';
@NgModule({
  declarations: [
    ComponentPage,
  ],
  imports: [
    UserDefinedComponentModule,
    UserDefinedInputOutputComponentModule,
    IonicPageModule.forChild(ComponentPage),
  ],
  exports: [
    ComponentPage
  ]
})
export class ComponentPageModule {}
