import { WindowVievComponent } from './../window-viev/window-viev.component';
import { Component, OnInit, NgModule } from '@angular/core';
import { Board } from '../board';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})

export class MainMenuComponent implements OnInit {
  listOfWindows: Board[] = [];
  currentBoard: Board;
  isSingleBoradVisible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  addWindow(name: string) {
    this.listOfWindows.push(new Board(name));
  }
  changeViev() {
    this.isSingleBoradVisible = !this.isSingleBoradVisible;
  }
  changeBoard(board: Board) {
    this.currentBoard = board;
    this.changeViev();
  }



}
