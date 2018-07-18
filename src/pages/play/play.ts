import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { AccessPage } from '../access/access';
import { InvitePage } from '../invite/invite';
import { SetPage } from '../set/set';

@Component({
  selector: 'page-play',
  templateUrl: 'play.html'
})
export class PlayPage {

  InvitePage = InvitePage;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  openSetPage() {
    this.navCtrl.push(SetPage);
  }

  openPage() {
    this.navCtrl.setRoot(AccessPage);
  }


  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Type de manche');

    alert.addInput({
      type: 'radio',
      label: 'Question',
      value: '1',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Mime',
      value: '2',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Mot',
      value: '3',
      checked: false
    });

    alert.addButton('Annuler');
    alert.addButton({
      text: 'OK',
      handler: data => {
        // this.testRadioOpen = false;
        // this.testRadioResult = data;
      }
    });
    alert.present();
  }
}

