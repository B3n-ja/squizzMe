import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AccessPage } from '../access/access';

@IonicPage()
@Component({
  selector: 'page-invite',
  templateUrl: 'invite.html',
})
export class InvitePage {

  cucumber: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitePage');
  }

  updateCucumber() {
    console.log('Cucumbers new state:' + this.cucumber);
  }

  updateCucumberb() {
    console.log('Cucumbers new state:' + this.cucumber);
  }

  openPage() {
    this.navCtrl.setRoot(AccessPage);
  }

}
