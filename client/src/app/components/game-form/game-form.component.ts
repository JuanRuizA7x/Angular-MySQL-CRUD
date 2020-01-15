import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from '../../models/game';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  game: Game = {
    title: '',
    description: '',
    image: ''
  };

  constructor( private gamesService: GamesService) { }

  ngOnInit() {
  }

  saveNewGame() {
    if ( this.game.title.length > 0 && this.game.description.length > 0 && this.game.image.length > 0 ) {
      this.gamesService.createGame(this.game).subscribe( res => console.log(res) );
    }
  }

}
