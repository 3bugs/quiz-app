import { Component } from '@angular/core';
import { quizData } from './data/quiz_data';
import { Choice } from './question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  audio = new Audio();

  questions = quizData;
  currentQuestionIndex = 0;
  isEnd = false;

  constructor() {
    this.audio.src = './assets/audio/click.wav';
  }

  onClickChoice(choice: Choice) {
    console.log('User clicked ' + choice.text);

    this.playSound();

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.isEnd = true;
    }
  }

  playSound() { 
    this.audio.load();
    this.audio.addEventListener('canplaythrough', () => {
      this.audio.play();
    });
  }
}
