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

}
