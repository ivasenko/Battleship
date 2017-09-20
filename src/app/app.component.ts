import { Component } from '@angular/core';

@Component({
  selector: 'bb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public audio = new Audio();
  isStarted: boolean = false;
  title = 'BATTLESHIP!';

  cli(){
    this.isStarted = true;
    this.audio.src = '../assets/sounds/newgame.mp3';
    this.audio.play();
  }
}
