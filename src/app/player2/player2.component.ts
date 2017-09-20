import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'bb-player2',
  templateUrl: './player2.component.html',
  styleUrls: ['./player2.component.css']
})
export class Player2Component implements OnInit {
  gamer2 = 'Гравець № 2';
  public audio = new Audio();
  speech = '';
  count = 0;

  ngOnInit() {}
  constructor(){}

  onDisplayLose() {
    this.speech = 'Промахнувся!Cпробуй ще!';
    this.audio.src = '../assets/sounds/splash.mp3';
    this.audio.play();
  }
  onDisplayVict() {
    this.speech = 'Ти влучив в корабель!';
    this.count++;
    this.audio.src = '../assets/sounds/hit.mp3';
    this.audio.play();
    if (this.count === 20) {
      this.speech = 'ПЕРЕМОГА!!!';
      this.audio.src = '../assets/sounds/victory.mp3';
      this.audio.play();
    }
  }
}
