import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Profile } from '../../libs/model/profile';

@Injectable()
export class DataServerProvider {

  constructor(public http: Http) {
  }

  saveProfileToServer(profile: Profile) {
    return new Promise(resolve => {
      let body = new URLSearchParams();
      body.set('name', profile['name']);
      body.set('address', profile['address']);
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      this.http.post('https://us-central1-ionic3firebase.cloudfunctions.net/receiveData', body, headers)
        .map(response => {
          var result = <Profile>response.json();
          return result;
        })
        .subscribe(profile => {
          resolve(profile);
        });
    });
  }

}
