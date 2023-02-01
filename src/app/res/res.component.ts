import { Component, OnInit} from '@angular/core';
import { interval, timeout } from 'rxjs';
import { ResService } from '../servicer/res.service';

@Component({
  selector: 'app-res',
  templateUrl: './res.component.html',
  styleUrls: ['./res.component.css']
})
export class ResComponent implements OnInit{
public namer : string="";
public questionList: any = [];
public currentQuestion : number = 0;
public points : number = 0;
counter=60;
correctAnswer:number= 0;
incorrectAnswer:number=0;
interval$:any;
progress:string="0";
isQuizCompleted : boolean = false;
constructor(private resService : ResService){}

ngOnInit(): void {
  this.namer=localStorage.getItem("namer")!;
  this.getAllQuestions();
  this.startCounter();
}

getAllQuestions(){
this.resService.getResJson()
.subscribe(res=>{
  this.questionList = res.questions;
})
}

nextQuestion(){
this.currentQuestion++;
this.resetCounter();

}

previousQuestion(){
this.currentQuestion--;
this.resetCounter();
}

answer(currentQno:number,option:any){
if(currentQno===this.questionList.length){
  this.isQuizCompleted = true;
  this.stopCounter();
}

if(option.correct){
  this.points+= 10;
  this.correctAnswer++;
  setTimeout(() => {
    this.currentQuestion++;
    this.resetCounter();
    this.getProgressPercent();
  }, 1000);
  
}else{
  setTimeout(() => {
    this.currentQuestion++;
  this.incorrectAnswer++;
  this.resetCounter();
  this.getProgressPercent();
  }, 1000);
  this.points-= 10;
  
}
}

startCounter(){
this.interval$ =interval(1000)
.subscribe(val=>{
  this.counter--;
  if(this.counter===0){
this.currentQuestion++;
this.counter=60;
this.points-=10;
  }
});
setTimeout(() => {
this.interval$.unsubscribe();
}, 6000000);
}
stopCounter(){
  this.interval$.unsubscribe();
  this.counter=0;
}
resetCounter(){
this.stopCounter();
this.counter=60;
this.startCounter();
this.progress="0";
}

resetQuiz(){
  this.resetCounter();
  this.getAllQuestions();
  this.points=0;
  this.counter=60;
  this.currentQuestion=0;
}

getProgressPercent(){
  this.progress=((this.currentQuestion/this.questionList.length)*100).toString();
  return this.progress;
}
}
