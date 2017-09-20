import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Player1Component } from './player1/player1.component';
import { Player2Component } from './player2/player2.component';
import { HitDirective } from './hit.directive';
import { MissDirective } from './miss.directive';

@NgModule({
  declarations: [
    AppComponent,
    Player1Component,
    Player2Component,
    HitDirective,
    MissDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
