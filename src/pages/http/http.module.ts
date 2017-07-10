import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpPage } from './http';

@NgModule({
  declarations: [
    HttpPage,
  ],
  imports: [
    IonicPageModule.forChild(HttpPage),
  ],
  exports: [
    HttpPage
  ]
})
export class HttpPageModule {}
