import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { PasswordPage } from '../password/password';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { PlayPage } from '../play/play';
import { SettingsPage } from '../settings/settings';
import { InvitePage } from '../invite/invite';
import { AccueilPage } from '../accueil/accueil';
import { SandboxPage } from '../sandbox/sandbox';

/**
 * Generated class for the AccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-access',
  templateUrl: 'access.html',
})
export class AccessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccessPage');
  }

  openTabsPage(){
    this.navCtrl.push(TabsPage);
  }

  openAccueilPage(){
    this.navCtrl.push(AccueilPage);
  }

  openSignupPage(){
    this.navCtrl.push(SignupPage);
  }

  openPasswordPage(){
    this.navCtrl.push(PasswordPage);
  }

  openHomePage(){
    this.navCtrl.push(HomePage);
  }

  openPlayPage(){
    this.navCtrl.push(PlayPage);
  }

  openSettingsPage(){
    this.navCtrl.push(SettingsPage);
  }

  openInvitePage(){
    this.navCtrl.push(InvitePage);
  }

  openSandboxPage(){
    this.navCtrl.push(SandboxPage);
  }

}
