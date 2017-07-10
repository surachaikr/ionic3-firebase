import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-form-builder',
  templateUrl: 'form-builder.html',
})
export class FormBuilderPage {
  profileForm: FormGroup;
  output: string = 'no data';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      name: [''],
      email: ['']
    });
  }

  saveProfile(form) {
    //this.output = form.value.name + " " + form.value.email;
    this.output = this.profileForm.value.name + " " + this.profileForm.value.email;
  }
}
