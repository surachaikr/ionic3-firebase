import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-data-manipulation',
  templateUrl: 'data-manipulation.html',
})
export class DataManipulationPage {
  private texts: string[] = ['abc', 'defg', 'hijkl'];
  public newTextUpper: string[];
  public newTextLength: string[];

  constructor() {
    this.newTextUpper = this.texts.map(this.upper);
    this.newTextLength = this.texts.filter(this.verifyLength);

    this.newTextLength = this.texts.filter( (word, index) => {
      return word.length > 3;
    });
  }

  public upper(word: string, index: number, texts: string[]) {
    return word.toUpperCase()+index+texts[index];
  }

  public verifyLength(word: string, index: number, texts: string[]) {
    return word.length > 3;
  }

}
