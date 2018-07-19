import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

import { AccueilPage } from '../accueil/accueil';


@Component({
 selector: 'page-settings',
 templateUrl: 'settings.html'
})
export class SettingsPage {

 constructor(public navCtrl: NavController, public appCtrl: App) {

 }

 logout() {
  this.appCtrl.getRootNav().setRoot(AccueilPage);
 }

}