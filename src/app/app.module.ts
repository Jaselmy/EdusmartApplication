import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CoursComponent } from './cours/cours.component';
import { QuestionsComponent } from './questions/questions.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChangeBgDirective } from './change-bg.directive';
import { TestComponent } from './test/test.component';
import { QpooComponent } from './qpoo/qpoo.component';
import { ResComponent } from './res/res.component';
import { CourspooComponent } from './courspoo/courspoo.component';
import { ReseauComponent } from './reseau/reseau.component';
import { CompilerComponent } from './compiler/compiler.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CoursComponent,
    QuestionsComponent,
    ChangeBgDirective,
    TestComponent,
    QpooComponent,
    ResComponent,
    CourspooComponent,
    ReseauComponent,
    CompilerComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
