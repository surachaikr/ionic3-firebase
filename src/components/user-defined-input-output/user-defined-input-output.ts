import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'user-defined-input-output',
  templateUrl: 'user-defined-input-output.html'
})
export class UserDefinedInputOutputComponent {
  @Input() inputText: string;
  @Output() outputText: EventEmitter<any> = new EventEmitter();
  text: string;

  constructor() {
    this.text = 'Text from the user defined component input output.';
    
  }

  sendOutput() {
    this.outputText.emit(this.inputText + ' ' + this.text.toUpperCase());
  }
}
