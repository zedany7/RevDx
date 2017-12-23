import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home'

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  lat: number = 31.046051;
  lng: number = 34.851612;
  zoom: number = 2;
  markers:any[]=[{lat:20.593684,lng:78.962880},{lat:9.701841,lng:79.042967},{lat:21.898882,lng:82.939452},
    {lat:27.545619,lng:84.843750},{lat:-16.934208,lng:24.843746},{lat:-28.268908,lng:27.568356},{lat:-31.394283,lng:20.185543},{lat:32.794046,lng:34.989571},{lat:23.634501,lng:-102.552784},{lat:32.085300,lng:34.781768}]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }
  AddPatientInfo()
  {
    this.navCtrl.setRoot(HomePage);
  }
}
