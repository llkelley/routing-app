import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  //added injection to include nav logic from home
  constructor(private myRouter: Router) { }

  ngOnInit() {
  }

  public goToFoo(){
    // window.alert('at foo');
    this.myRouter.navigate(["foo"]);
  }

}
