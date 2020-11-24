import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import *as Enums from './../../enums/enums';

@IonicPage()
@Component({
  selector: 'page-lscan',
  templateUrl: 'lscan.html',
})
export class LscanPage {
  Dt = [];
  datapost =[];
  scanText = "";
  scanFormat = "";
  Date1: any = {};
  Date2 = [];
  saveData: any = {};
  Kon: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner,
    public http: Http, public alertCrtl: AlertController) {

    this.Dt = JSON.parse(localStorage.getItem('TC'));
    // console.log(this.TC);

  }



  ionViewDidLoad() {
    console.log(this.Dt);
    console.log(this.Date1);
    console.log('ionViewDidLoad LscanPage');
  }
  submit() {
    this.saveData = {
      saveD: this.Date1.saveD,
      tcID: this.Dt['user'],
      saveSD: this.scanText,
    };
    console.log(this.Dt[0]);
    let url = Enums.APIURL.URL1 + '/app/PR_PHP/M_insert.php';

    if (this.saveData != null) {

      this.http.post(url, this.saveData).subscribe(
        (data: any) => {
          this.Kon = data;


          let Wan = JSON.stringify(this.saveData);
          localStorage.setItem('sca', Wan);
          this.Date2 = JSON.parse(localStorage.getItem('sca'));
          console.log("Date:", this.saveData)
        }
      )

    }
    if (this.scanText != "") {
      console.log("Date:", this.scanText)
    }
  }

  // alertPopup(title:string,Msg:string){
  //   let alert = this.alertCrtl.create({
  //       title : title,
  //       subTitle : Msg,
  //       buttons : ['OK']  
  //   }); 

  //   alert.present();
  // }

  save() {


  }

  Lscan() {

    this.barcodeScanner.scan().then((barcodeData) => {
      console.log('Barcode data', barcodeData);
      this.scanText = barcodeData.text;
    }).catch(err => {
      console.log('Error', err);
    });
  }


  UPlscan() {

    this.barcodeScanner.scan().then((barcodeData) => {
      console.log('Barcode data', barcodeData);
      this.scanText = barcodeData.text;
      this.scanFormat = barcodeData.format;
    }).catch(err => {
      console.log('Error', err);
    });
  }


  DTLscan() {
    this.navCtrl.push("DlscanPage")
  }

  // D(){
  //   this.Da

  // }


}//END
