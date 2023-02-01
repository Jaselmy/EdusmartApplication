import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { CoursComponent } from './cours/cours.component';
import { QuestionsComponent } from './questions/questions.component';
import { TestComponent } from './test/test.component';
import { QpooComponent } from './qpoo/qpoo.component';
import { ResComponent } from './res/res.component';
import { CourspooComponent } from './courspoo/courspoo.component';
import { ReseauComponent } from './reseau/reseau.component';
import {CompilerComponent } from './compiler/compiler.component';


const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'cours', component: CoursComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: 'test', component: TestComponent},
  {path: 'qpoo', component: QpooComponent},
  {path: 'res', component: ResComponent},
  {path: 'courspoo', component: CourspooComponent},
  {path: 'reseau', component: ReseauComponent},
  {path: 'compiler', component: CompilerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
