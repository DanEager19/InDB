import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_GAMES } from '../graphql/graphql.queries';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.scss']
})
export class GamelistComponent implements OnInit {
  games: any[] = [];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: GET_GAMES,
    }).valueChanges.subscribe((result: any) => {
      this.games = result?.data?.games;
      this.loading = result.loading;
      this.error = result.error;
    })
  }

}
