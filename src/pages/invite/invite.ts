import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AccessPage } from '../access/access';
import { PlayPage } from '../play/play';

@IonicPage()
@Component({
  selector: 'page-invite',
  templateUrl: 'invite.html',
})
export class InvitePage {

  cucumber: boolean;
  segmentTab: string = 'friend';
  users = [];
  team: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitePage');
    this.users = [
      ["user 1",""],
      ["user 2",""],
      ["user 3",""],
      ["user 4",""],
    ];
  }

  addToTeam(t, i) {
    this.users[i][1] = t;
  }

  openPlayPage() {
    this.navCtrl.setRoot(PlayPage);
  }

  openPage() {
    this.navCtrl.setRoot(AccessPage);
  }

}
