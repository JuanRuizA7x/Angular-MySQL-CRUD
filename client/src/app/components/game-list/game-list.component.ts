import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: Game[] = [];

  constructor( private gamesService: GamesService ) {
  }

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.gamesService.getGames().subscribe(
      (games: Game[]) => this.games = games,
      (error: any) => console.error(error));
  }

}
