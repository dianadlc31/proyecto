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



}
