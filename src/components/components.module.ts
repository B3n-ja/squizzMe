import { NgModule } from '@angular/core';
import { Timer } from './countdown-timer/timer';
import { TimerProgress } from './timer-progress/timer-progress';
import { FlashCardComponent } from './flash-card/flash-card';

@NgModule({
	declarations: [ 
		Timer,
		TimerProgress,
    	FlashCardComponent,
	],
	imports: [],
	exports: [
		Timer,
  		TimerProgress,
    	FlashCardComponent,
	]
})
export class ComponentsModule {}
