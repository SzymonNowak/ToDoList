import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-adder',
  templateUrl: './adder.component.html',
  styleUrls: ['./adder.component.css']
})
export class AdderComponent implements OnInit {
   ListCreator: EventEmitter<boolean> = new EventEmitter();
  creatorVisible: boolean = false;
  windowNames: string[] = [];
  constructor() { }

  ngOnInit() {
  }

   showListCreator() {
    this.creatorVisible = !this.creatorVisible;

   }
    addNewWindow(newWindowName: string) {
      this.windowNames.push(newWindowName);
      console.log(newWindowName);
      this.showListCreator();
    }



}
