import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CancionesShawnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-canciones-shawn',
  templateUrl: 'canciones-shawn.html',
})
export class CancionesShawnPage {
  Canciones=['In my blood', 'Nervous', 'Lost in Japan', 'Where were you in the morning?', 'Fallin all in you', 'Particular taste', 'Why', 'Because I had you', 'Queen', 'Youth', 'Mutual', 'Perfectly wrong', 'When you´re ready']
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancionesShawnPage');
  }

}
