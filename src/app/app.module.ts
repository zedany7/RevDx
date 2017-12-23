import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SampleScanPage } from '../pages/sample-scan/sample-scan';
import { BloodCountPage } from '../pages/blood-count/blood-count';
import { MalariaTestPage } from '../pages/malaria-test/malaria-test';
import { G6pdPage } from '../pages/g6pd/g6pd';
import { MapPage } from '../pages/map/map';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { AgmCoreModule } from '@agm/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SampleScanPage,
    BloodCountPage,
    MalariaTestPage,
    G6pdPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    IonicImageViewerModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB-ziqpuMMH52jxcevWRuFiRPeuD09gn9U'
    })

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SampleScanPage,
    BloodCountPage,
    MalariaTestPage,
    G6pdPage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
