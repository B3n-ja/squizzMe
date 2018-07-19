import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';

import { AccessPage } from '../access/access';
import { InvitePage } from '../invite/invite';
import { SetPage } from '../set/set';
import { GamePage } from '../game/game';

import { GameDataProvider } from '../../providers/game-data/game-data';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-play',
  templateUrl: 'play.html'
})
export class PlayPage {

  InvitePage = InvitePage;
  modes = [];
  modeToggle = 0;
  modeSelected = 0;
  themes = [];
  themeToggle = 0;
  themeSelected = 0;
  gameOK=0;

  constructor(private toastController: ToastController, private gameData: GameDataProvider, private api: ApiProvider, public navCtrl: NavController, public alertCtrl: AlertController) {
    console.log('constructeur play.ts');
    this.modes = this.gameData.getMode();
  }

  public ionViewWillEnter() {
    console.log('ionViewWillEnter play.ts');
    if(this.gameData.getTeamsOK() == 1) {
      this.modeToggle = 1;
    }else{
      this.modeToggle = 0;
    }
  }

  openSetPage() {
    this.navCtrl.push(SetPage);
  }

  openPage() {
    this.navCtrl.setRoot(AccessPage);
  }

  alertTeam() {
    let alert = this.alertCtrl.create({
      title: "Alerte",
      message: "Veuillez constituer les équipes",
    });
    alert.present();
  }

  alertManche() {
    let alert = this.alertCtrl.create({
      title: "Alerte",
      message: "Veuillez choisir un type de manche",
    });
    alert.present();
  }

  alertTheme() {
    let alert = this.alertCtrl.create({
      title: "Alerte",
      message: "Veuillez choisir un thème",
    });
    alert.present();
  }

  showModes() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Type de manche');

    for(let i =0; i< this.modes.length; i++){
      console.log('Ajout mode '+this.modes[i][1]+'('+this.modes[i][0]+')');
      alert.addInput({
        type: 'radio',
        label: this.modes[i][1],
        value: this.modes[i][0],
        checked: false
      });
    }

    alert.addButton('Annuler');
    alert.addButton({
      text: 'OK',
      handler: data => {
        console.log('data:'+data);
        this.modeSelected = data;
        this.gameData.setSelectedMode(data);
        alert.onDidDismiss(() => {
          let mancheToast = this.toastController.create({
            message: "Manche sélectionnée : " + this.getModeName(data),
            duration: 2000
          });
          mancheToast.present();      
        });
      }
    });
    alert.present();
    this.themeToggle = 1;
    this.loadThemes(this.modeSelected);
  }

  getModeName(a: number) {
    for(let k=0; k<this.modes.length; k++){
      if(this.modes[k][0] == a)
        return this.modes[k][1];
    }
  }

  randomMode(){
    let r = Math.floor(Math.random() * this.modes.length);
    this.modeSelected = this.modes[r][0];
    this.gameData.setSelectedMode(this.modes[r][0]);
    let mancheToast = this.toastController.create({
      message: "Manche sélectionnée : " + this.modes[r][1],
      duration: 2000
    });
    mancheToast.present();
    this.themeToggle = 1;
    this.loadThemes(this.modeSelected);
  }

  loadThemes(id:number) {
      console.log('Appel de api.getThemes');
      this.api.getThemes(id).subscribe(data => {
        let retour = data;
        console.log(retour);
        for(let i=0; i< retour.length; i++) {
          this.themes[i] = [retour[i]['theme_id'], retour[i]['theme'], retour[i]['']];
        }
      });
  }

  showThemes() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Thème');

    for(let i =0; i< this.themes.length; i++){
      console.log('Ajout thème '+this.themes[i][1]+'('+this.themes[i][0]+')');
      alert.addInput({
        type: 'radio',
        label: this.themes[i][1],
        value: this.themes[i][0],
        checked: false
      });
    }

    alert.addButton('Annuler');
    alert.addButton({
      text: 'OK',
      handler: data => {
        console.log('data:'+data);
        this.themeSelected = data;
        this.gameData.setSelectedTheme(data);
        alert.onDidDismiss(() => {
          let mancheToast = this.toastController.create({
            message: "Thème sélectionné : "+this.getThemeName(data),
            duration: 2000
          });
          mancheToast.present();
          this.gameOK = 1;
        });
      }
    });
    alert.present();
  }

  getThemeName(a: number) {
    for(let k=0; k<this.themes.length; k++){
      if(this.themes[k][0] == a)
        return this.themes[k][1];
    }
  }

  gameOnBitch(){
    //Démarre la manche
    console.log('gameOn ' + this.getModeName(this.gameData.getSelectedMode()) + this.getThemeName(this.gameData.getSelectedTheme()));
    this.navCtrl.push(GamePage, {'modeName': this.getModeName(this.gameData.getSelectedMode()), 'themeName': this.getThemeName(this.gameData.getSelectedTheme())});
  }
}

