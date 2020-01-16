import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from '../../models/game';
import { GamesService } from '../../services/games.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  game: Game = {
    id: undefined,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };

  update = false;

  params = this.activatedRoute.snapshot.params;


  constructor( private gamesService: GamesService, private activatedRoute: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    if ( this.params.id ) {
      this.gamesService.getGame(this.params.id).subscribe(
        (res: Game[]) => {
          if ( res.length !== 0 ) {
          this.game = res[0];
          } else {
            alert(`The game doesn't exist`);
            this.router.navigate(['games']);
          }
        },
        error => alert(error)
      );

      this.update = true;
    }
  }

  saveNewGame() {
    if ( this.game.title.length > 0 && this.game.description.length > 0 && this.game.image.length > 0 ) {
      delete this.game.id;
      delete this.game.created_at;
      this.gamesService.createGame(this.game).subscribe(
        res => {
          alert('Game created');
          this.router.navigate(['games']);
        },
        error => console.log(error)
        );
    } else {
      alert('Todos los campos son requeridos');
    }
  }

  updateGame() {
    if ( this.game.title.length > 0 && this.game.description.length > 0 && this.game.image.length > 0 ) {
      delete this.game.id;
      delete this.game.created_at;
      this.gamesService.updateGame(this.params.id, this.game).subscribe(
        res => {
          alert('Game updated');
          this.router.navigate(['games']);
        },
        error => console.log(error)
        );
    } else {
      alert('Todos los campos son requeridos');
    }
  }

}
