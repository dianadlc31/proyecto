import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CancionesShawnPage } from './canciones-shawn';

@NgModule({
  declarations: [
    CancionesShawnPage,
  ],
  imports: [
    IonicPageModule.forChild(CancionesShawnPage),
  ],
})
export class CancionesShawnPageModule {}
