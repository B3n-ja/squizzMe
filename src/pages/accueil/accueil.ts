import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { PasswordPage } from '../password/password';
import { SignupPage } from '../signup/signup';

import { ApiProvider } from '../../providers/api/api';


@IonicPage()
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {

  credentialsForm: FormGroup;
  datas = {};

  PasswordPage = PasswordPage;
  SignupPage = SignupPage;

  constructor(private toastCtrl: ToastController, private api: ApiProvider, private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.credentialsForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilPage');
  }

  login() {
    this.datas = {
      email : this.credentialsForm['controls']['email'].value,
      password : this.credentialsForm['controls']['password'].value,
    };
    console.log('Appel de api.getUser');
    this.api.getUser(this.datas).subscribe(data => {
      let retour = data;
      console.log(retour);
      if(retour['user_id']){
        let msg = 'Bonjour ' + retour['username']  + ', Vous avez été identifié(e)';
        let redirect = 'ok';
        this.presentLoginToast(msg, redirect, { 'username': retour['username'], 'user_id': retour['user_id'], 'banana_points': Math.floor(Math.random()*350) });
      }else{
        let msg = retour['message'];
        let redirect = '';
        this.presentLoginToast(msg, redirect, { });
      }
    });
  }

  presentLoginToast(msg, redirect, params) {
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

  openTabsPage(){
    this.navCtrl.push(TabsPage);
  }

  openPasswordPage(){
    this.navCtrl.push(PasswordPage);
  }

  openPage() {
    this.navCtrl.pop();
  }


  // showPrompt() {
  //   const prompt = this.alertCtrl.create({
  //     title: 'Inscription',
  //     message: "Merci de compléter tous les champs",
  //     cssClass: 'custom-alert-danger',
  //     inputs: [
  //       {
  //         name: 'username',
  //         type: "text",
  //         placeholder: 'Nom d\'utilisateur',
  //       },
  //       {
  //         name: 'email',
  //         type:"email",
  //         placeholder: 'Adresse mail',
  //       },
  //       {
  //         name: 'passwordFirst',
  //         type:"password",
  //         placeholder: 'Mot de passe',
  //       },
  //       {
  //         name: 'passwordSecond',
  //         type:"password",
  //         placeholder: 'Confirmer le mot de passe',
  //       },
  //     ],
  //     buttons: [
  //       {
  //         text: 'Annuler',
  //         handler: data => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Valider',
  //         handler: data => {
  //           console.log('Saved clicked');
  //         },
  //         cssClass: 'alertDanger'
  //       }
  //     ]
      
  //   });
  //   prompt.present();
  // }

}
