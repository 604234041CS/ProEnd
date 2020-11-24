import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

// import { BatteryStatus } from '@ionic-native/battery-status';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Dt =[]; 
  UUS;
  // key: "";
  // logindata: any= {};
  constructor(public navCtrl: NavController,private storage: Storage, public navParams: NavParams) {
    // this.logindata.username="";
    // this.logindata.password="";

this.Dt= JSON.parse(localStorage.getItem('TC'));

//"{\"user\":\"1231\",\"pass\":\"456\"}"

//console.log(localStorage.getItem('TC'));
console.log(typeof(this.Dt));
// this.UUS = this.navParams.get('TC');
// console.log('Name Tc',this.UUS);
    // this.UUS = JSON.parse(localStorage.getItem('TC'));
    // console.log(this.UUS);
   
  }
  
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad HomePage');
  //   this.storage.set(this.key,this.logindata.username);
  //   this.storage.get(this.logindata.username).then((val) => {
  //   console.log('Your age is', val);
  // });
  // }

  Lscan(){
    this.navCtrl.push("LscanPage")
  }
  
  Pscan(){
    this.navCtrl.push("PscanPage")
  }


}//END
