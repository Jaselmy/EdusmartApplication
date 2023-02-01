import { Component,  OnInit, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
  @ViewChild('name') nameKey!: ElementRef;
  @ViewChild('namep') nameKeyp!: ElementRef;
  @ViewChild('namer') nameKeyr!: ElementRef;
  constructor(){} 
ngOnInit():void{
}

  startQuiz(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);
  }

  startQuizP(){
    localStorage.setItem("namep",this.nameKeyp.nativeElement.value);
  }

  startQuizR(){
    localStorage.setItem("namer",this.nameKeyr.nativeElement.value);
  }
}
