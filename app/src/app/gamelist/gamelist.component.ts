import { Component, OnInit } from '@angular/core';
import { GameType, GamesService } from '../games.service';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.scss']
})
export class GamelistComponent implements OnInit {
  games: GameType[] = [];
  loading = true;
  error: any;
  title: string = 'G';
  constructor(private gamesService: GamesService) { }

  async ngOnInit(): Promise<void> {
     await this.updateGames();
  }

  async updateGames() {
    const result = await this.gamesService.getOneGame(this.title);
    this.games = result;
  };
}
