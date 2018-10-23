import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FotoShawnPage } from '../foto-shawn/foto-shawn';
import { BiografiaShawnPage } from '../biografia-shawn/biografia-shawn';
import { CancionesShawnPage } from '../canciones-shawn/canciones-shawn';
import { ReseñashawnPage } from '../reseñashawn/reseñashawn';
import { FotocharliePage } from '../fotocharlie/fotocharlie';
import { BiografiacharliePage } from '../biografiacharlie/biografiacharlie';
import { ReseñacharliePage } from '../reseñacharlie/reseñacharlie';
import { CancionescharliePage } from '../cancionescharlie/cancionescharlie';
import { ReseñaharryPage } from '../reseñaharry/reseñaharry';
import { CancionesPage } from '../canciones/canciones';
import { BiografiaharryPage } from '../biografiaharry/biografiaharry';
import { FotoharryPage } from '../fotoharry/fotoharry';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
fotoshawn = FotoShawnPage;
biografiashawn = BiografiaShawnPage;
cancionesshawn = CancionesShawnPage;
resenashawn= ReseñashawnPage;
fotocharlie= FotocharliePage;
biografiacharlie= BiografiacharliePage;
resenacharlie= ReseñacharliePage;
cancionescharlie= CancionescharliePage;
resenaharry=ReseñaharryPage;
cancionesharry= CancionesPage;
biografiaharry= BiografiaharryPage;
fotoharry= FotoharryPage;

  constructor(public navCtrl: NavController) {

  }
  clickfotoshawn()
  {
    this.navCtrl.push(this.fotoshawn);
  }
  clickbiografiashawn()
  {
    this.navCtrl.push(this.biografiashawn);
  }
  clickcancionesshawn()
  {
    this.navCtrl.push(this.cancionesshawn);
  }
  clickresenashawn()
  {
    this.navCtrl.push(this.resenashawn);
  }
  clickfotocharlie()
  {
    this.navCtrl.push(this.fotocharlie);
  }
  clickbiografiacharlie()
  {
    this.navCtrl.push(this.biografiacharlie);
  }
  clickresenacharlie()
  {
    this.navCtrl.push(this.resenacharlie);
  }
  clickcancionescharlie()
  {
    this.navCtrl.push(this.cancionescharlie);
  }
  clickcancionesharry()
  {
    this.navCtrl.push(this.cancionesharry);
  }
  clickresenaharry()
  {
    this.navCtrl.push(this.resenaharry);
  }
  clickbiografiaharry()
  {
    this.navCtrl.push(this.biografiaharry);
  }
  clickfotoharry()
    {
      this.navCtrl.push(this.fotoharry);
    }
  

}
