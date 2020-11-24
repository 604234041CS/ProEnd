import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DlscanPage } from './dlscan';

@NgModule({
  declarations: [
    DlscanPage,
  ],
  imports: [
    IonicPageModule.forChild(DlscanPage),
  ],
})
export class DlscanPageModule {}
