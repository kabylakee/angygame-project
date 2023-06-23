import {Component, Input, OnInit} from '@angular/core';
import {IGame} from "../../entities/interfaces/game.interface";

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() public games: IGame[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
