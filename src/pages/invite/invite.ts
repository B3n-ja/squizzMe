import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AccessPage } from '../access/access';
import { PlayPage } from '../play/play';

import { GameDataProvider } from '../../providers/game-data/game-data';
import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-invite',
  templateUrl: 'invite.html',
})
export class InvitePage {

  segmentTab: string = 'friend';
  friends = [];
  user_id: number;
  username: string;
  team: number;
  teamA:string;
  teamB:string

  constructor(private gameData: GameDataProvider, private api: ApiProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.user_id = this.gameData.getUID();
    this.username = this.gameData.getUsername();
    this.friends = this.gameData.getFriends();
    let teamTmp = this.gameData.getTeamNames();
    let i = Math.floor(Math.random() * teamTmp.length);
    this.teamA = teamTmp[i];
    teamTmp.splice(i, 1);
    let j = Math.floor(Math.random() * teamTmp.length);
    this.teamB = teamTmp[j];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitePage');
    if(this.friends.length == 0){
      console.log('Appel de api.getFriends '+ this.user_id);
      this.api.getFriends(this.user_id).subscribe(data => {
        let retour = data;
        console.log(retour);
        for(let i=0; i< retour.length; i++) {
          console.log('Ajout de '+ retour[i]['username']);
          this.friends[i] = [retour[i]['user_id'], retour[i]['username'], ''];
        }
        this.friends.push([this.user_id, this.username, '']);
      });
    }
  }

  addToTeam(t, i) {
    this.friends[i][2] = t;
  }

  goToManche() {
    this.gameData.setFriends(this.friends);
    this.navCtrl.pop();
  }

  openPage() {
    this.navCtrl.setRoot(AccessPage);
  }

}
