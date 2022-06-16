import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Apollo } from 'apollo-angular';
import { GameInputType, GET_ALL_GAMES } from '../game.service';

@Component({
  selector: 'gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.scss']
})
export class GamelistComponent implements OnInit {
  games: GameInputType[] = [];
  loading = true;
  error: any;

  constructor(private apollo: Apollo, private title: Title) {}

  ngOnInit():void {
    this.title.setTitle(`In-DB`);
    this.apollo.watchQuery({
      query: GET_ALL_GAMES
    }).valueChanges.subscribe(({data, error, loading}: any) => {
      this.loading = loading;
      this.error = error
      this.games = data.games;
      
    });
    this.games.sort((a,b) => {
      let fa = a.title.toLowerCase(),
          fb = b.title.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
  }
}
