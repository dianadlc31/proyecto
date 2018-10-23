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
import { BiografiacharliePage } from '../pages/biografiacharlie/biografiacharlie';
import { ReseñacharliePage } from '../pages/reseñacharlie/reseñacharlie';
import { CancionescharliePage } from '../pages/cancionescharlie/cancionescharlie';
import { CancionesPage } from '../pages/canciones/canciones';
import { BiografiaharryPage } from '../pages/biografiaharry/biografiaharry';
import { ReseñaharryPage } from '../pages/reseñaharry/reseñaharry';
import { FotoharryPage } from '../pages/fotoharry/fotoharry';
import { ReseñasamPage } from '../pages/reseñasam/reseñasam';
import { BiografiaSamPage } from '../pages/biografia-sam/biografia-sam';
import { CancionessamPage } from '../pages/cancionessam/cancionessam';
import { FotosamPage } from '../pages/fotosam/fotosam';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FotoShawnPage,
    BiografiaShawnPage,
    CancionesShawnPage,
    ReseñashawnPage,
    FotocharliePage,
    BiografiacharliePage,
    ReseñacharliePage,
    CancionescharliePage,
    CancionesPage,
    BiografiaharryPage,
    ReseñaharryPage,
    FotoharryPage,
    ReseñasamPage,
    BiografiaSamPage,
    CancionessamPage,
    FotosamPage
    
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
    FotocharliePage,
    BiografiacharliePage,
    ReseñacharliePage,
    CancionescharliePage,
    CancionesPage,
    BiografiaharryPage,
    ReseñaharryPage,
    FotoharryPage,
    ReseñasamPage,
    BiografiaSamPage,
    FotosamPage,
    CancionessamPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
