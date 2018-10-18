import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FotoShawnPage } from '../foto-shawn/foto-shawn';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
fotoshawn = FotoShawnPage;
  constructor(public navCtrl: NavController) {

  }
  clickfotoshawn()
  {
    this.navCtrl.push(this.fotoshawn);
  }

}
