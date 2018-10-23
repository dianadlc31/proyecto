import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CancionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-canciones',
  templateUrl: 'canciones.html',
})
export class CancionesPage {
  Canciones=['Meet me in the hallway', 'Sign of the times', 'Carolina', 'Two ghosts', 'Sweet creature', 'Only angel', 'Kiwi', 'Ever since New York', 'Woman', 'From the dining table']
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CancionesPage');
  }

}
