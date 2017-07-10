import { Component } from '@angular/core';

@Component({
  selector: 'user-defined',
  templateUrl: 'user-defined.html'
})
export class UserDefinedComponent {

  text: string;

  constructor() {
    this.text = 'Text in the user defined component.';
  }

  public getText(): string {
    return 'Text from getText().'
  }
}
