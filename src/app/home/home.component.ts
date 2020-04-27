import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  innerHeight = window.innerHeight;

  constructor() { }

  ngOnInit() {
  }
  public goTo(elementId): void { 
    console.log("goTO:"+elementId);
    let e = document.getElementById(elementId);
    e.scrollIntoView({behavior: "smooth"})
  }

}
