import { Component, OnInit } from '@angular/core';
import { GameService, GameType, GET_FULL_GAME, UPDATE_GAME } from '../game.service';
import { Apollo } from 'apollo-angular';


@Component({
  selector: 'game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit {
  game!: GameType;
  loading = true;
  error: any;
  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: GET_FULL_GAME,
      variables: {
        title: 'Ha',
      },
    }).valueChanges.subscribe(({data, loading, error}: any) => {
      this.game = data.findGameByTitle;
      this.loading = loading;
      this.error = error;
    });
  }
}
