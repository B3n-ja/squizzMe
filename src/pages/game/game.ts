import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GameDataProvider } from '../../providers/game-data/game-data';
import { ApiProvider } from '../../providers/api/api';

import { Timer } from '../../components/countdown-timer/timer';
import { Slides } from 'ionic-angular';
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
  smn:string; //selectedModeName
  stn:string //selectedThemeName
  game = [];

  @ViewChild(Timer) timer: Timer;
  startTimer() {
    this.timer.timer.hasStarted = true;
    this.timer.timer.runTimer = true;
    this.timerTick();
    console.log('car demarre');
  }
  timerTick() {
    console.log('redifined timerTick');
    setTimeout(() => {
      if (!this.timer.timer.runTimer) { return; }
      this.timer.timer.secondsRemaining--;
      this.timer.timer.displayTime = this.timer.getSecondsAsDigitalClock(this.timer.timer.secondsRemaining);
      if (this.timer.timer.secondsRemaining > 0) {
        this.timerTick();
      } else {
        this.timer.timer.hasFinished = true;
        this.gameStop();
      }
    }, 1000);
  }

  @ViewChild(Slides) slides: Slides;

  currentIndex = 0;
  timeInSeconds = 30;
  showTimer = false;

  score = 0;
  bonnesReponses = 0;
  mauvaisesReponses = 0;

  constructor(private gameData: GameDataProvider, private api: ApiProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.st = this.gameData.getSelectedTheme();
    this.sm = this.gameData.getSelectedMode();
    this.smn = this.navParams.get('modeName');
    this.stn = this.navParams.get('themeName');
    console.log(this.smn + ' : ' + this.stn);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
      console.log('Appel de api.getMode');

      this.api.getQuizz(this.smn, this.st).subscribe(data => {
        let retour = data;
        console.log(retour);
        for(let i=0; i< retour.length; i++) {
          this.game[i] = [retour[i]['question_id'], retour[i]['question'], retour[i]['reponse1'], ''];
        }
      });
  }

  slideChanged() {
    this.currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', this.currentIndex);
  }

  gameStart() {
    this.slides.slideNext(500, false);
    this.showTimer = true;
    this.startTimer();
  }

  ok(i:number) {
    console.log('ok' + i);
    this.game[this.slides.getActiveIndex()][3] = 1;
    this.slides.slideNext(500, false);
  }

  ko(i:number) {
    console.log('ko' + i);
    this.game[this.slides.getActiveIndex()][3] = 0;
    this.slides.slideNext(500, false);
  }

  gameStop() {
    this.calculScore();
    this.slides.slideTo(this.slides.length(), 50, false);
    console.log('Manche terminée');
  }

  calculScore(){
    for(let i =0; i < this.game.length; i++) {
      switch(this.game[i][3]){
        case 1:
          this.score +=1;
          this.bonnesReponses +=1;
          break;
        case 0:
        this.mauvaisesReponses +=1;
          break;
        default:
          break;
      }
    }
  }

}
