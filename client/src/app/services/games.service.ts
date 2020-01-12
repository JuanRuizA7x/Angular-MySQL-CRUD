import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor( private httpClient: HttpClient ) { }

  URL = `http://localhost:3000/api`;

  getGames() {
    return this.httpClient.get(`${this.URL}/games`);
  }

  getGame( id: string ) {
    return this.httpClient.get(`${this.URL}/games/${id}`);
  }

  createGame( game: Game ) {
    return this.httpClient.post(`${this.URL}/games`, game);
  }

  updateGame( id: string, game: Game ) {
    return this.httpClient.put(`${this.URL}/games/${id}`, game);
  }

  deleteGame( id: string ) {
    return this.httpClient.delete(`${this.URL}/games/${id}`);
  }

}
