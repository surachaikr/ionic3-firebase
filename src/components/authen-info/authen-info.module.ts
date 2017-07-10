import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthenInfoComponent } from './authen-info';

@NgModule({
  declarations: [
    AuthenInfoComponent,
  ],
  imports: [
    IonicPageModule.forChild(AuthenInfoComponent),
  ],
  exports: [
    AuthenInfoComponent
  ]
})
export class AuthenInfoComponentModule {}
