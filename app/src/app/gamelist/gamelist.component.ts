import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GameInputType, GET_ALL_GAMES } from '../games.service';

@Component({
  selector: 'gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.scss']
})
export class GamelistComponent implements OnInit {
  games: GameInputType[] = [];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit():void {
    this.apollo.watchQuery({
      query: GET_ALL_GAMES
    }).valueChanges.subscribe(({data, error, loading}: any) => {
      this.loading = loading;
      this.error = error
      this.games = data.games;
    });
  }
}
