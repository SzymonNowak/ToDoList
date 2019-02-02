import { WindowVievComponent } from './window-viev/window-viev.component';
export class Window {

  WindowName: string;
  WindowObject: WindowVievComponent;
  constructor(name: string) {
    this.WindowName = name;
    this.WindowObject = new WindowVievComponent{};

  }
}
