import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SampleScanPage } from '../pages/sample-scan/sample-scan';
import { BloodCountPage } from '../pages/blood-count/blood-count';
import { MalariaTestPage } from '../pages/malaria-test/malaria-test';
import { MapPage } from '../pages/map/map';

import { G6pdPage } from '../pages/g6pd/g6pd';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MapPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [

       { title: 'Sample scan', component: SampleScanPage },
      { title: 'Blood count', component: BloodCountPage },
      { title: 'Malaria test', component: MalariaTestPage },
      { title: 'G6PD test', component: G6pdPage },
      // { title: 'Map', component: ListPage },
      { title: 'Done', component: MapPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
