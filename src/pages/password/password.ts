import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { AccueilPage } from '../accueil/accueil';

import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the PasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {

  credentialsForm: FormGroup;
  datas = {};

  constructor(private toastCtrl: ToastController, private api: ApiProvider, private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.credentialsForm = this.formBuilder.group({
      email: ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordPage');
  }

  recover() {
    this.datas = {
      email : this.credentialsForm['controls']['email'].value,
    };
    console.log('Appel de api.getRetrieve');
    this.api.getRetrieve(this.datas).subscribe(data => {
      let retour = data;
      console.log(retour);
      let msg = retour[0]['message'];
      this.presentRetrieveToast(msg);
    });
  }

  presentRetrieveToast(msg) {
    console.log('presentRetrieveToast' + msg);
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'middle'
    });
  
    toast.onDidDismiss(() => {
      this.navCtrl.push(AccueilPage);
    });
  
    toast.present();
  }  

  openPage() {
    this.navCtrl.popToRoot();
  }

}
