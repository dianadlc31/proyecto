import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CancionescharliePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cancionescharlie',
  templateUrl: 'cancionescharlie.html',
})
export class CancionescharliePage {
  Canciones=['The Way I am', 'Attention', 'LA girls', 'How long', 'Done for me', 'Patient', 'If you leave me now', 'BOY', 'Slow it down', 'Change', 'Somebody Told me', 'Empty cups', 'Through it all']
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancionescharliePage');
  }

}
