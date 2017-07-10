import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StructurePage } from './structure';
import { StructureComponentIonicComponentModule } from '../../components/structure-component-ionic/structure-component-ionic.module';
import { StructurePipeIonicPipeModule } from '../../pipes/structure-pipe-ionic/structure-pipe-ionic.module';
import { StructureDirectiveIonicDirectiveModule } from '../../directives/structure-directive-ionic/structure-directive-ionic.module';

@NgModule({
  declarations: [
    StructurePage,
  ],
  imports: [
    StructureComponentIonicComponentModule,
    StructurePipeIonicPipeModule,
    StructureDirectiveIonicDirectiveModule,
    IonicPageModule.forChild(StructurePage),
  ],
  exports: [
    StructurePage
  ]
})
export class StructurePageModule {}
