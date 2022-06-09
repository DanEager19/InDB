import { Component, OnInit } from '@angular/core';
import { FourZeroFourComponent } from '../four-zero-four/four-zero-four.component';
import { GameService, GameType, GET_FULL_GAME, UPDATE_GAME } from '../game.service';
import { Apollo } from 'apollo-angular';
import { Router } from '@angular/router';


@Component({
  selector: 'game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit {
  game!: GameType;
  loading = true;
  error: any;
  name: any;
  constructor(private apollo: Apollo, private router: Router) { }

  ngOnInit(): void {
    this.name = this.router.url.slice(1);
    this.apollo.watchQuery({
      query: GET_FULL_GAME,
      variables: {
        title: this.name,
      },
    }).valueChanges.subscribe(({data, loading, error}: any) => {
      this.game = data.findGameByTitle;
      this.loading = loading;
      this.error = error;
    });
  }
}
