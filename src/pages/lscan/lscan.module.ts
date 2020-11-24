import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LscanPage } from './lscan';

@NgModule({
  declarations: [
    LscanPage,
  ],
  imports: [
    IonicPageModule.forChild(LscanPage),
  ],
})
export class LscanPageModule {}
