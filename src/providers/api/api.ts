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

  private baseURL: string = 'https://www.avnirvaccination.fr/squizzMeAPI/';
  private options: any;

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  /**
   * Add functions 
   */

  addUser(inputData) {
    console.log('addUser from apiProvider ' + this.baseURL + 'user data: '+ JSON.stringify(inputData));
    let retour = this.http.post(this.baseURL+'user' ,JSON.stringify(inputData));
    console.log('--Retour addUser from api.ts--'+retour+'--');
    return retour;
  }
  
  addManche(data) {
    console.log('addManche');

  }

  /**
   * Get functions 
   */

  getRetrieve(inputData): Observable<any> {
    console.log('getRetrieve from apiProvider ' + this.baseURL + 'retrieve/ data: ' + inputData['email']);
    let retour = this.http.get(this.baseURL+'retrieve/' + inputData['email']);
    console.log('--getRetrieve from api.ts--'+retour+'--');
    return retour;
  }

  getUser(inputData): Observable<any> {
    console.log('getUser from apiProvider ' + this.baseURL + 'login data: '+ JSON.stringify(inputData));
    let retour = this.http.post(this.baseURL+'login' ,JSON.stringify(inputData));
    console.log('--Retour getUser from api.ts--'+retour+'--');
    return retour;
  }

  getFriends(data): Observable<any> {
    console.log('getFriends');

    return;
  }

  getQuizz(): Observable<any> {
    console.log('getQuizz -> ' + this.baseURL+'quizz');
    let retour = this.http.get(this.baseURL+'quizz');
    console.log('--getQuizz from api.ts--'+retour+'--');
    return retour;
  }

  getManche(): Observable<any> {
    console.log('getManche');
    return this.http.post(this.baseURL,JSON.stringify(this.options));
  }

  getThemes(): Observable<any> {
    console.log('getThemes');

    return;
  }
  

  getQuotes(): Observable<any> {
    //console.log('Hello RestProvider Provider -> getQuotes -> '+this.apiURL+'/quotes');
    let retour = this.http.get(this.baseURL+'/quotes');
    console.log('--getQuotes from rest.ts--'+retour+'--');
    return retour;

  }

  addQuote(data) {
    let retour = this.http.post(this.baseURL+'/quote', JSON.stringify(data));
    console.log('--addQuote from rest.ts--'+retour+'--');
    return retour;
  }

}
