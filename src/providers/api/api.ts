import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx"
/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  private apiURL = 'http://api.rabbithole.wdrlnd';

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  /**
   * Add functions 
   */

  addUser(data) {
    console.log('addUser');

  }
  
  addManche(data) {
    console.log('addManche');

  }

  /**
   * Get functions 
   */

  getUser(data): Observable<any> {
    console.log('getUser');

    return;
  }

  getFriends(data): Observable<any> {
    console.log('getFriends');

    return;
  }

  getQuizz(data): Observable<any> {
    console.log('getQuizz');

    return;
  }

  getTypeManche(): Observable<any> {
    console.log('getTypeManche');

    return;
  }

  getThemes(): Observable<any> {
    console.log('getThemes');

    return;
  }
  

  getQuotes(): Observable<any> {
    //console.log('Hello RestProvider Provider -> getQuotes -> '+this.apiURL+'/quotes');
    let retour = this.http.get(this.apiURL+'/quotes');
    console.log('--getQuotes from rest.ts--'+retour+'--');
    return retour;

  }

  addQuote(data) {
    let retour = this.http.post(this.apiURL+'/quote', JSON.stringify(data));
    console.log('--addQuote from rest.ts--'+retour+'--');
    return retour;
  }

}
