import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { PasswordPage } from '../password/password';
import { SignupPage } from '../signup/signup';


@IonicPage()
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {

  
  PasswordPage = PasswordPage;
  SignupPage = SignupPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilPage');
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
