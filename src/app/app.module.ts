import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadResumeComponent } from './upload-resume/upload-resume.component';
import { QuizComponent } from './quiz/quiz.component'; 
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { QuizInstructionsComponent } from './quiz-instructions/quiz-instructions.component';
@NgModule({
  declarations: [
    AppComponent,
    UploadResumeComponent,
    QuizComponent,
    LoginComponent,
    RegisterComponent,
    QuizInstructionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }