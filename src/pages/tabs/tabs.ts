import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { PlayPage } from '../play/play';
import { SettingsPage } from '../settings/settings';

import { GameDataProvider } from '../../providers/game-data/game-data';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PlayPage;
  tab3Root = SettingsPage;

  constructor(private gameData: GameDataProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.gameData.setUID(navParams.get('user_id'));
    this.gameData.setUsername(navParams.get('username'));
    this.gameData.setBP(navParams.get('banana_points'));
  }


}
