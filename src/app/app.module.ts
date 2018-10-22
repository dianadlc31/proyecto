import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FotoShawnPage } from '../pages/foto-shawn/foto-shawn';
import { BiografiaShawnPage } from '../pages/biografia-shawn/biografia-shawn';
import { CancionesShawnPage } from '../pages/canciones-shawn/canciones-shawn';
import { ReseñashawnPage } from '../pages/reseñashawn/reseñashawn';
import { FotocharliePage } from '../pages/fotocharlie/fotocharlie';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FotoShawnPage,
    BiografiaShawnPage,
    CancionesShawnPage,
    ReseñashawnPage,
    FotocharliePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FotoShawnPage,
    BiografiaShawnPage,
    CancionesShawnPage,
    ReseñashawnPage,
    FotocharliePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
