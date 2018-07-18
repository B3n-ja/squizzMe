import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { PlayPage } from '../play/play';
import { SettingsPage } from '../settings/settings';

import { GameDataProvider } from '../../providers/game-data/game-data';
import { ApiProvider } from '../../providers/api/api';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PlayPage;
  tab3Root = SettingsPage;

  constructor(private gameData: GameDataProvider, private api: ApiProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.gameData.setUID(navParams.get('user_id'));
    this.gameData.setUsername(navParams.get('username'));
    this.gameData.setBP(navParams.get('banana_points'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad tabs');
    if(this.gameData.getMode().length == 0){
      let modes = this.gameData.getMode();
      console.log('Appel de api.getMode');
      this.api.getMode().subscribe(data => {
        let retour = data;
        console.log(retour);
        for(let i=0; i< retour.length; i++) {
          modes[i] = [retour[i]['mode_id'], retour[i]['manche'], retour[i]['description']];
        }
        this.gameData.setMode(modes);
      });
    }
  }


}
