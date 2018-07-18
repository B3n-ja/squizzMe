import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the SandboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sandbox',
  templateUrl: 'sandbox.html',
})
export class SandboxPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiProvider) {
  }

  getQuizz() {
    this.api.getQuizz('Quizz', 1).subscribe(data => {
      console.log('data:'+data);
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SandboxPage');
  }

}
