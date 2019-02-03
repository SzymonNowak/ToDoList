import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-adder',
  templateUrl: './adder.component.html',
  styleUrls: ['./adder.component.css']
})
export class AdderComponent implements OnInit {
  @Output() NewWindowAdded: EventEmitter<string>  = new EventEmitter<string>();
  creatorVisible: boolean = false;
  constructor() { }

  ngOnInit() {
  }

   showListCreator() {
    this.creatorVisible = !this.creatorVisible;
   }
   addNewWindow(newWindowName: string) {
    if (newWindowName !== '') {
      this.NewWindowAdded.emit(newWindowName);
      this.showListCreator();
    }
  }



}
