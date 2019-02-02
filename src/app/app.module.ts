import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListCreatorComponent } from './list-creator/list-creator.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AdderComponent } from './adder/adder.component';
import { WindowVievComponent } from './window-viev/window-viev.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCreatorComponent,
    MainMenuComponent,
    AdderComponent,
    WindowVievComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserModule
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent, ]
})
export class AppModule { }
export class AppBootstrapModule {}
