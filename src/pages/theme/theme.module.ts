import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThemePage } from './theme';

@NgModule({
  declarations: [
    ThemePage,
  ],
  imports: [
    IonicPageModule.forChild(ThemePage),
  ],
  exports: [
    ThemePage
  ]
})
export class ThemePageModule {}
