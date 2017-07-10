import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserDefinedComponent } from './user-defined';

@NgModule({
  declarations: [
    UserDefinedComponent,
  ],
  imports: [
    IonicPageModule.forChild(UserDefinedComponent),
  ],
  exports: [
    UserDefinedComponent
  ]
})
export class UserDefinedComponentModule {}
