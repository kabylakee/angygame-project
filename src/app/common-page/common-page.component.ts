import { Component, OnInit } from '@angular/core';
import {GAMES_MOCKS} from "../shared/entities/mocks/games.mock";
import {IGame} from "../shared/entities/interfaces/game.interface";

@Component({
  selector: 'app-common-page',
  templateUrl: './common-page.component.html',
  styleUrls: ['./common-page.component.scss']
})
export class CommonPageComponent implements OnInit {
  public games: IGame[] = GAMES_MOCKS;

  ngOnInit(): void {
  }

}
