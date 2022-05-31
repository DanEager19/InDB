import { Injectable } from '@angular/core';
import { Apollo, QueryRef, gql } from 'apollo-angular';

export interface Information {
  dev: string;
  pub: string;
  date: string;
  rating: string;
}

export interface Requirements {
  os: string;
  cpu: string;
  ram: string;
  gpu: string;
  storage: string;
};

export interface GameType {
  _id?: string;
  title: string;
  summary?: string;
  information?: Information;
  requirements?: Requirements;
}

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  
  private findAllGames: QueryRef<{games:GameType[]}>;
  private findOneGame: QueryRef<{games: GameType}, {title: string}>;

  constructor(private apollo: Apollo) {
    this.findAllGames = this.apollo.watchQuery({
      query: gql`
        query {
          games {
              _id
              title
          }
        }`
    }); 

    this.findOneGame = this.apollo.watchQuery({
      query: gql`
        findGameByTitle(title: $title) {
              _id
              title
              summary
              information {
                  dev
                  pub
                  date
                  rating
              }
              requirements {
                  os
                  cpu
                  ram
                  gpu
                  storage
              }
          }`
    });
  }

  async getGames(): Promise<GameType[]> {
    const result = await this.findAllGames.refetch();
    return result.data.games;
  }

  async getOneGame(title: string): Promise<GameType> {
    const result = await this.findOneGame.refetch({title});
    return result.data.games;
  }
}
