import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FotoShawnPage } from '../foto-shawn/foto-shawn';
import { BiografiaShawnPage } from '../biografia-shawn/biografia-shawn';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
fotoshawn = FotoShawnPage;
biografiashawn = BiografiaShawnPage;
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

}
