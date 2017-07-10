import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from "@ionic-native/geolocation";
import GoogleMapsLoader from "@types/google-maps";

@IonicPage()
@Component({
  selector: 'page-google-maps',
  templateUrl: 'google-maps.html',
})
export class GoogleMapsPage {
  @ViewChild('map') mapElement: ElementRef;
  public map: google.maps.Map;
  public marker: google.maps.Marker;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoogleMapsPage');
    this.loadMap();
  }

  loadMap() {
    try {
      let mapOption = {
        center: new google.maps.LatLng(13.8344713, 100.5246173),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOption);
    } catch(err) {
      console.log("Load map error: ", err);
    }
  }

    setCurrentLocation() {
    let currentPosition: google.maps.LatLng;
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log("plugin: ", JSON.stringify(resp));
      currentPosition = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      this.map.setCenter(currentPosition);
      this.setMarker(currentPosition);
    }, (err) => {
      console.log("Get current position error: ", err);
      currentPosition = new google.maps.LatLng(13.8344713, 100.5246173);
      this.map.setCenter(currentPosition);
      this.setMarker(currentPosition);
    });
  }

  setMarker(position: google.maps.LatLng) {
    if (this.marker) {
      this.marker.setMap(null);
    }

    this.map.setCenter(position);
    this.marker = new google.maps.Marker({
      position: position,
      map: this.map,
      draggable: true,
    });

    let me = this;
    this.marker.addListener("click", () => {
      let content: string = `
        <h4>Position info:</h4>
        <p>lat: ${me.marker.getPosition().lat()}</p>
        <p>lng: ${me.marker.getPosition().lng()}</p>
        `;
      let infoWindow = new google.maps.InfoWindow({
        content: content,
      });
      infoWindow.open(me.map, me.marker);
    });
  }

}
