import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('name') nameKey!: ElementRef;
  constructor(){} 
ngOnInit():void{
}

startQuiz(){
  localStorage.setItem("name",this.nameKey.nativeElement.value);
}

}
