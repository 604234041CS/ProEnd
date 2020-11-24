import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PscanPage } from './pscan';

@NgModule({
  declarations: [
    PscanPage,
  ],
  imports: [
    IonicPageModule.forChild(PscanPage),
  ],
})
export class PscanPageModule {}
