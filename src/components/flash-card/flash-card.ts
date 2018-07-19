import {Component, Input} from '@angular/core';


@Component({
  selector: 'flash-card',
  templateUrl: 'flash-card.html'
})
export class FlashCardComponent {

  public flipped : boolean = false;

  @Input() public frontContentTitle : string;
  @Input() public backContentTitle : string;
  @Input() public frontContentQuestion : string;
  @Input() public backContentQuestion : string;


  public constructor() {

  }


  public flip() {
    this.flipped = !this.flipped;
  }
}