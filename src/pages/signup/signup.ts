import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {  

  credentialsForm: FormGroup;
  datas = {};

  constructor(private toastCtrl: ToastController, private api: ApiProvider, private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.credentialsForm = this.formBuilder.group({
      username: [''],
      email: [''],
      password1: [''],
      password2: ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  register() {
    this.datas = {
      username : this.credentialsForm['controls']['username'].value,
      email : this.credentialsForm['controls']['email'].value,
      password1 : this.credentialsForm['controls']['password1'].value,
      password2 : this.credentialsForm['controls']['password2'].value,
    };
    console.log('Appel de api.addUser');
    this.api.addUser(this.datas).subscribe(data => {
      let retour = data;
      console.log(retour);
      if(retour['user_id']){
        let msg = 'Utilisateur inséré, Vous êtes identifié(e)';
        let redirect = 'ok';
        this.presentSignupToast(msg, redirect,  { 'username': retour['username'], 'user_id': retour['user_id'], 'banana_points': 0 });
      }else{
        let msg = retour['message'];
        let redirect = '';
        this.presentSignupToast(msg, redirect, {});
      }
    });
  }

  presentSignupToast(msg, redirect, params) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'middle'
    });
  
    toast.onDidDismiss(() => {
      if(redirect != ''){
        this.navCtrl.push(TabsPage, params);
      }
    });
  
    toast.present();
  }  

  openPage() {
    this.navCtrl.popToRoot();
  }

}
