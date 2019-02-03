import { ToDo } from './toDo';


export class Board {

  WindowName: string;
  toDos: ToDo[] = [];


  constructor(name: string ) {
    this.WindowName = name;

  }
}
