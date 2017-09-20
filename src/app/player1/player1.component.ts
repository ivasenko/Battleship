import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'bb-player1',
  templateUrl: './player1.component.html',
  styleUrls: ['./player1.component.css']
})
export class Player1Component implements OnInit {
  gamer1 = 'Гравець № 1';
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
