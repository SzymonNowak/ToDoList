import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListCreaterComponent } from './list-creater/list-creater.component';
import { ListCreatorComponent } from './list-creator/list-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCreaterComponent,
    ListCreatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
