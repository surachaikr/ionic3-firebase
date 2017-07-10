import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Country } from '../../libs/model/country';

@IonicPage()
@Component({
  selector: 'page-http',
  templateUrl: 'http.html',
})
export class HttpPage {
  items: any;
  country: Country = new Country();

  constructor(public http: Http) {
    this.http.get('/assets/data/country.json')
      .map(res => res.json())
      .subscribe(data => {
        this.items = data.items;
      });
  }

  advanceWithCatch() {
    this.http.get('/assets/data/country.json').catch((error, observable) => {
      console.log(error);
      return observable;
    }).map(res => res.json()).catch((error, observable) => {
      console.log(error);
      return observable;
    }).subscribe(data => {
      this.items = data.items;
    });
  }

  selectCountry(country: Country) {
    this.country = country;
  }

}
