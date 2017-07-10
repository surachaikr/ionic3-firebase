import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Validator } from '../../libs/util';

@IonicPage()
@Component({
  selector: 'page-form-builder-validation',
  templateUrl: 'form-builder-validation.html',
})
export class FormBuilderValidationPage {
  profileForm: FormGroup;
  output: string = 'no data';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validator.email])]
    });
  }

  saveProfile(form) {
    this.output = form.value.name + " " + form.value.email;
    //this.output = this.profileForm.value.name + " " + this.profileForm.value.email;
  }
}
