import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserDefinedInputOutputComponent } from './user-defined-input-output';

@NgModule({
  declarations: [
    UserDefinedInputOutputComponent,
  ],
  imports: [
    IonicPageModule.forChild(UserDefinedInputOutputComponent),
  ],
  exports: [
    UserDefinedInputOutputComponent
  ]
})
export class UserDefinedInputOutputComponentModule {}
