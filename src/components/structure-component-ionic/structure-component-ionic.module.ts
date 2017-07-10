import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StructureComponentIonicComponent } from './structure-component-ionic';

@NgModule({
  declarations: [
    StructureComponentIonicComponent,
  ],
  imports: [
    IonicPageModule.forChild(StructureComponentIonicComponent),
  ],
  exports: [
    StructureComponentIonicComponent
  ]
})
export class StructureComponentIonicComponentModule {}
