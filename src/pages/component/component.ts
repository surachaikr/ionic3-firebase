import { Component, ViewChild } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { UserDefinedComponent } from '../../components/user-defined/user-defined';

@IonicPage()
@Component({
  selector: 'page-component',
  templateUrl: 'component.html',
})
export class ComponentPage {
  public textInPage: string;
  public pageText: string = 'Text in uppercase: '; 
  public textOutput: string;
  @ViewChild(UserDefinedComponent) userDefinedComponent: UserDefinedComponent;

  ionViewDidLoad() {
    this.textInPage = this.userDefinedComponent.getText();
  } 

  setTextOutput(textOutput: string) {
    this.textOutput = textOutput;
  } 
}
