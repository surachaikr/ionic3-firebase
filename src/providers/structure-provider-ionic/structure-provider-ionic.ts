import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class StructureProviderIonicProvider {
  public getExternalInterface(): string {
    return "External data";
  }
}
