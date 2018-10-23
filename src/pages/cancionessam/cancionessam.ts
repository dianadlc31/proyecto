import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CancionessamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cancionessam',
  templateUrl: 'cancionessam.html',
})
export class CancionessamPage {
  Canciones=['Money on my mind', 'Good thing', 'Stay with me','Leave you lover', 'I´m not the only one', 'I´ve told you now', 'Like I can', 'Life support', 'Not in that way', 'Lay me down']
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancionessamPage');
  }

}
