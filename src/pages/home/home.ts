import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AccessPage } from '../access/access';

import { GameDataProvider } from '../../providers/game-data/game-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user_id: number;
  username: string;
  bananaPoints: number;
  constructor(private gameData: GameDataProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.user_id = this.gameData.getUID();
    this.username = this.gameData.getUsername();
    this.bananaPoints = this.gameData.getBP();
  }

  openPage() {
    this.navCtrl.setRoot(AccessPage);
  }

}
