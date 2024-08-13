
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadResumeComponent } from './upload-resume/upload-resume.component';
import { QuizComponent } from './quiz/quiz.component'; 
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { QuizInstructionsComponent } from './quiz-instructions/quiz-instructions.component';

const routes: Routes = [
  // { path: '', redirectTo: '/register', pathMatch: 'full' },
  {
    path:'',
    component:RegisterComponent
  },
  { path: 'register', component: RegisterComponent },
  { path: 'upload-resume', component: UploadResumeComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'login', component: LoginComponent },
  { path: 'quiz-instructions', component: QuizInstructionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
