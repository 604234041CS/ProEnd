import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DpscanPage } from './dpscan';

@NgModule({
  declarations: [
    DpscanPage,
  ],
  imports: [
    IonicPageModule.forChild(DpscanPage),
  ],
})
export class DpscanPageModule {}
