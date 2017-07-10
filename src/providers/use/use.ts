import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UseProvider {

  public getData(): string {
    return "My data from the use provider";
  }

  public getInformation(): string {
    return "My data from the local object"
  }

}
