import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GridResponsivePage } from './grid-responsive';

@NgModule({
  declarations: [
    GridResponsivePage,
  ],
  imports: [
    IonicPageModule.forChild(GridResponsivePage),
  ],
  exports: [
    GridResponsivePage
  ]
})
export class GridResponsivePageModule {}
