import { ToDo } from './../toDo';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core/src/render3';
import { Board } from '../board';
import { moveItemInArray, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-window-viev',
  templateUrl: './window-viev.component.html',
  styleUrls: ['./window-viev.component.css']
})
export class WindowVievComponent implements OnInit {
  @Input() board: Board;
  done: ToDo = new ToDo('Done:');
  allTasks: string[] = [];
  creatorVisible: boolean = false;
  @Output() backToMenu: EventEmitter<boolean>  = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  addNewTask(taskName: string, todo: ToDo) {
    if (taskName !== '') {
      todo.tasks.push(taskName);
    }

  }

  addNewToDo(todoName: string) {
    if (todoName !== '') {

      this.creatorVisible = !this.creatorVisible;
      this.board.toDos.push(new ToDo(todoName));
    }
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  goToMainMenu(backToMenu: boolean) {
    this.backToMenu.emit(true);
  }
}
