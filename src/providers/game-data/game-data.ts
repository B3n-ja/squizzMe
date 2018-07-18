import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GameDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GameDataProvider {

  user_id: number;
  username: string;
  bananaPoints: number;
  teamNames = ['Macaque', 'Bonobo', 'Gorille', 'Capucin', 'Chimpanzé', 'Ouistiti', 'Gibbon', 'Mandrill', 'Orang-outan'];
  friends = [];
  modes = [];
  teamsOK = 0;
  selectedMode = 0;
  selectedTheme = 0;

  constructor(public http: HttpClient) {
    console.log('Hello GameDataProvider Provider');
  }

  setUID(uid: number){
    this.user_id = uid;
  }

  getUID():number {
    return this.user_id;
  }

  setUsername(username: string){
    this.username = username;
  }
  
  getUsername():string {
    return this.username;
  }

  setBP(bananaPoints: number){
    this.bananaPoints = bananaPoints;
  }
  
  getBP():number {
    return this.bananaPoints;
  }

  getTeamNames() {
    return this.teamNames;
  }

  setFriends(friends) {
    this.friends = friends;
  }

  getFriends() {
    return this.friends;
  }

  setMode(modes) {
    this.modes = modes;
  }

  getMode() {
    return this.modes;
  }

  setTeamsOK(t: number){
    this.teamsOK = t;
  }

  getTeamsOK():number {
    return this.teamsOK;
  }

  setSelectedMode(t: number){
    this.selectedMode = t;
  }

  getSelectedMode():number {
    return this.selectedMode;
  }

  setSelectedTheme(t: number){
    this.selectedTheme = t;
  }

  getSelectedTheme():number {
    return this.selectedTheme;
  }

}
