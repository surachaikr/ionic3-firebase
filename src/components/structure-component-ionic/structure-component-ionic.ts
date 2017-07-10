import { Component } from '@angular/core';
import { StructureProviderIonicProvider } from '../../providers/structure-provider-ionic/structure-provider-ionic';

@Component({
  selector: 'structure-component-ionic',
  templateUrl: 'structure-component-ionic.html'
})
export class StructureComponentIonicComponent {
  text: string;
  constructor(public structureProviderIonicProvider: StructureProviderIonicProvider) {
    this.text = structureProviderIonicProvider.getExternalInterface();
  }
}
