import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[bbHit]'
})
export class HitDirective implements OnInit{
  @Input() selectedColor = 'darkred';
  @Input() defaultColor = 'orange';

  private backgroundColor: string;

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }
  constructor(){}

  @HostBinding('style.backgroundColor') get getDefaultColor(){
    return this.backgroundColor;
  }
  @HostBinding('style.cursor') get getCursor(){
    return 'pointer';
  }
  @HostListener('click') onClick() {
    this.backgroundColor = this.selectedColor;
  }
}
