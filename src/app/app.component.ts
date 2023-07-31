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
  score = 0;

  constructor() {
    this.audio.src = './assets/audio/click.wav';
    this.newQuiz();
  }

  onClickChoice(choice: Choice) {
    console.log('User clicked ' + choice.text);

    this.playSound();

    if (choice.isAnswer) this.score++;

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.isEnd = true;
    }
  }

  private playSound() { 
    this.audio.load();
    this.audio.addEventListener('canplaythrough', () => {
      this.audio.play();
    });
  }

  onClickNewQuiz() {
    this.newQuiz();
  }

  private newQuiz() {
    this.isEnd = false;
    this.currentQuestionIndex = 0;
    this.score = 0;
  }
}
