// import { HPage } from './../pages/h/h';
// import { DpscanPage } from './../pages/dpscan/dpscan';
import {HttpClientModule} from '@angular/common/http';
import { BarcodescanPage } from './../pages/barcodescan/barcodescan';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Flashlight } from '@ionic-native/flashlight';
import { BatteryStatus } from '@ionic-native/battery-status';
import { ApiKeysProvider } from '../providers/api-keys/api-keys';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SocialSharing } from '@ionic-native/social-sharing';
import { LoginPage } from '../pages/login/login';
import {HttpModule} from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    BarcodescanPage,
    LoginPage,
  
    
    
    

    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    BarcodescanPage,
    LoginPage,
 


  ],
  providers: [
    StatusBar,
    SplashScreen,SMS,BarcodeScanner,Flashlight,BatteryStatus,YoutubeVideoPlayer,TextToSpeech,SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiKeysProvider
  ]
})
export class AppModule {}
