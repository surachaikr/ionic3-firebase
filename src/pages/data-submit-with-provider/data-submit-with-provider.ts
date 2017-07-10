import { Component } from '@angular/core';
import { IonicPage, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/map';
import { Profile } from '../../libs/model/profile';
import { DataServerProvider } from '../../providers/data-server/data-server'

@IonicPage()
@Component({
  selector: 'page-data-submit-with-provider',
  templateUrl: 'data-submit-with-provider.html',
})
export class DataSubmitWithProviderPage {
  profileForm: FormGroup;
  profile: Profile = new Profile();

  constructor(public formBuilder: FormBuilder,
    public dataServerProvider: DataServerProvider,
    public loadingController: LoadingController) {

    this.profileForm = this.formBuilder.group({
      name: [''],
      address: ['']
    });
    this.setFormData(this.profileForm, this.profile);
  }

  saveProfile() {
    let loading = this.loadingController.create();
    loading.present().then(() => {
      let profile: Profile = new Profile();
      this.setProfileData(this.profileForm, profile);

      this.dataServerProvider.saveProfileToServer(profile).then((profile: Profile) => {
        this.profile = profile;
        this.setFormData(this.profileForm, this.profile);
        loading.dismiss();
      });
    });
  }

  setFormData(profileForm: FormGroup, profile: Profile) {
    profileForm.controls["name"].setValue(profile['name']);
    profileForm.controls["address"].setValue(profile['address']);
  }

  setProfileData(profileForm: FormGroup, profile: Profile) {
    profile['name'] = profileForm.controls["name"].value;
    profile['address'] = profileForm.controls["address"].value;
  }

}
