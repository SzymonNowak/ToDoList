import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-creator',
  templateUrl: './list-creator.component.html',
  styleUrls: ['./list-creator.component.css']
})
export class ListCreatorComponent implements OnInit {
  @Output() NewWindowAdded: EventEmitter<string>  = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }


  AddNewWindow(windowName: string) {
    this.NewWindowAdded.emit(windowName);
  }

}
