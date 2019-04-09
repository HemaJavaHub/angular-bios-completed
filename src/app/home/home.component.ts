import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'HelloWorld';
  myColor:string = 'magenta';
  toggleView:boolean = false;
  buttonText:string = 'View Bio';

  constructor() { }

  toggleBioView():void{
    this.toggleView =   !this.toggleView;
    this.buttonText = this.buttonText == "View Bio" ? "Hide Bio" : "View Bio";
  }

  changeColor():void{
    this.myColor = 'blue';
  }

  
  ngOnInit() {
  }

}
