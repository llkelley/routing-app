import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  constructor(private myRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  // public catName = "test";

  // read only property, TS style!!
  public get catName(): string {
    //return "cat name here";
    return this.myRoute.snapshot.paramMap.get("name");
  }

}
