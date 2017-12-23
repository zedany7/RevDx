import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SampleScanPage} from '../sample-scan/sample-scan';
import {MapPage} from '../map/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  scanYourSample()
  {
    this.navCtrl.setRoot(SampleScanPage);
  }
  back(){
    this.navCtrl.setRoot(MapPage);
  }

}
