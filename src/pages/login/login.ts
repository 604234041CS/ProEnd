import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import *as Enums from './../../enums/enums';
//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  Dt = [];
  logindata: any = {};
  TData:any=[];
  UUS;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public alertCrtl: AlertController,
    private storage: Storage) {
    this.logindata.username = "";
    this.logindata.password = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signIn(username,password) {
    console.log(username);
    console.log(password);

    if (username != "" && password != ""){
      let url = Enums.APIURL.URL1 + "/APP/PR_PHP/login.php";
      let datapost = JSON.stringify({
        user: this.logindata.username,
        pass: this.logindata.password,

      });

      this.http.post(url,datapost).map(res =>res.json()).subscribe((data:any)=>{

        console.log(data);
        

        console.log("11");

        if(data != null){
          console.log("1");
          let accout = {
            accout:data[0].TC_id
          }
          console.log(data);
          this.storage.set('accoutuser',accout);
          this.navCtrl.setRoot(HomePage,username);
        }
        else{
          console.log(data);
          
          console.log("2");
          const alert = this.alertCrtl.create({
            message: "รหัสผู้ใช้ผิดพลาด",
            buttons: [{
              cssClass: 'secondary',
              text: 'ok',
              role: 'ok'
            }
          ]
          });
          alert.present();
        }    
      })
    }
  }
}
    



    
      
      
        


 

      

          
          


          


