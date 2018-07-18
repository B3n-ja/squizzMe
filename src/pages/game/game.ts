import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GameDataProvider } from '../../providers/game-data/game-data';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  st:number; //selectedTheme
  sm:number; //selectedMode
  smm:string; //selectedModeName
  game = [];
  constructor(private gameData: GameDataProvider, private api: ApiProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.st = this.gameData.getSelectedTheme();
    this.sm = this.gameData.getSelectedMode();
    this.smm = this.navParams.get('modeName');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
      console.log('Appel de api.getMode');

      this.api.getQuizz(this.smm, this.st).subscribe(data => {
        let retour = data;
        console.log(retour);
        for(let i=0; i< retour.length; i++) {
          this.game[i] = [retour[i]['question_id'], retour[i]['question'], retour[i]['reponse1'], ''];
        }
      });
  }

}
