import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnComponent } from './exam/learn.component';
import { QuizComponent } from './quiz/quiz.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: LearnComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
