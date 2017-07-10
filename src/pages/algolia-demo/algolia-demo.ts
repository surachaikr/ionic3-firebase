import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import algoliasearch from 'algoliasearch';

/**
 * Generated class for the AlgoliaDemoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-algolia-demo',
  templateUrl: 'algolia-demo.html',
})
export class AlgoliaDemoPage {
  public aglClient = algoliasearch('9OW81NTIOO', 'a727dcd997e99560964e9b9861703ec8');
  public aglIndex: algoliasearch.AlgoliaIndex;
  public keyword: string;
  public hits: any;
  public noHits: string = "0/0";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('init algolia');
    this.aglIndex = this.aglClient.initIndex('contacts');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlgoliaDemoPage');
  }

  searchContact() {
    console.log("try search: ", this.keyword);
    this.aglIndex.search(this.keyword, (err, content) => {
      console.log("result: ", JSON.stringify(content));
      console.log("error: ", err);
      if (err == null) {
        if (content.nbPages == 0) {
          this.noHits = "0/0";
        } else if (content.nbPages == 1) {
          this.noHits = content.nbHits + "/" + content.nbHits;
        } else {
          this.noHits = content.hitsPerPage + "/" + content.nbHits;
        }

        this.hits = content.hits;
      }
    });
  }

}
