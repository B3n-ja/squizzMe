import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AccessPage } from '../access/access';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openPage() {
    this.navCtrl.setRoot(AccessPage);
  }

}
