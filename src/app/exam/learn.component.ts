import { Component, inject } from '@angular/core';
import { Choice, Question } from '../question';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent {
  audio = new Audio();
  quizService: QuizService = inject(QuizService);

  questions: Question[];
  currentQuestionIndex = 0;
  showList = false;
  score = 0;

  constructor() {
    this.questions = this.quizService.getQuizDataNoImage();
    this.audio.src = '../assets/audio/click.wav';
    this.newQuiz();
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
    this.questions.sort((a, b) => 0.5 - Math.random());
    this.showList = false;
    this.currentQuestionIndex = 0;
    this.score = 0;
  }

  getCorrectChoice(question: Question) {
    return question.choices.find(choice => choice.isAnswer)?.text;
  }

  onClickPrevious() {
    this.currentQuestionIndex--;
    if (this.currentQuestionIndex < 0) {
      this.currentQuestionIndex = 0;
    }
  }

  onClickNext() {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex > this.questions.length - 1) {
      this.currentQuestionIndex = this.questions.length - 1;
    }
  }

  onClickMenu(index: number) {
    this.showList = index === 1;
  }
}
