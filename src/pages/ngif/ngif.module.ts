import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NgifPage } from './ngif';

@NgModule({
  declarations: [
    NgifPage,
  ],
  imports: [
    IonicPageModule.forChild(NgifPage),
  ],
  exports: [
    NgifPage
  ]
})
export class NgifPageModule {}
