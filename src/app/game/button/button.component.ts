import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() pokemonLength: number = 0;
  @Input() text: string = '';
  @Output() onClickEvent = new EventEmitter<number>();

  faGamepad = faGamepad;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.onClickEvent.emit(this.pokemonLength);
    this.buttonAudio();
  }

  buttonAudio(){
    let audio = new Audio();
    audio.src = "assets/audios/enter.flac";
    audio.load();
    audio.play();
  }

}