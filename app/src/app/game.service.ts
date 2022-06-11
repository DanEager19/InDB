import { Injectable } from '@angular/core';
import { Form, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Apollo, gql, QueryRef } from 'apollo-angular';

interface Information {
  developer: string;
  publisher: string;
  date: string;
  rating: string;
  series: string;
  genres: string;
  modes: string;
  platforms: string; 
}
export interface GameType {
  _id?:string;
  title?:string;
  link:string;
  summary?:string;
  information?:Information;
}

export interface GameInputType {
  title:string;
  link:string;
  summary:string;
  information:Information;
}
export const GET_ALL_GAMES = gql`
    query {
        games {
            _id
            title
            link
        }
    }
`;

export const GET_FULL_GAME = gql`
    query findGameByTitle($link: String!) {
        findGameByTitle(link: $link) {
          _id
          title
          link
          summary
          information {
            developer
            publisher
            date
            rating
            series
            genres
            modes
            platforms
          }
        }
    }
`;

export const CREATE_GAME = gql`
  mutation createGame($input: GameInputType!) {
    createGame(input: $input) {
      title
      link
      summary
      information {
        developer
        publisher
        date
        rating
        series
        genres
        modes
        platforms
      }
    }
  }
`
export const UPDATE_GAME = gql`
  mutation updateGame($id: String!, $input: GameInputType!){
    updateGame(id: $id, input: $input) {
      title
      link
      summary
      information {
        developer
        publisher
        date
        rating
        series
        genres
        modes
        platforms
      }
    }
  }
`;

export const DELETE_GAME = gql`
  mutation deleteGame($id: String!) {
    deleteGame(id: $id) {
      title
      link
      summary
      information {
        developer
        publisher
        date
        rating
        series
        genres
        modes
        platforms
      }
    }
  }
` 

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private apollo: Apollo) { }

  gameForm(): FormGroup {
    let formGroup: FormGroup = new FormGroup({
      id: new FormControl({value:'', disabled: true}),
      title: new FormControl(''),
      link: new FormControl(''),
      summary: new FormControl(''),
      developer: new FormControl(''),
      publisher: new FormControl(''),
      date: new FormControl(''),
      rating: new FormControl(''),
      series: new FormControl(''),
      genres: new FormControl(''),
      modes: new FormControl(''),
      platforms: new FormControl(''),
    });
    return formGroup;
  }

  createGame(f: any) {
    this.apollo.mutate({
      mutation: CREATE_GAME,
      variables: {
        input: {
          title: f.title,
          link: f.link,
          summary: f.summary,
          information: {
            developer: f.developer,
            publisher: f.publisher,
            date: f.date,
            rating: f.rating,
            series: f.series,
            genres: f.genres,
            modes: f.modes,
            platforms: f.platforms
          }
        }
      },
    }).subscribe();
  }

  updateGame(id:string, f: any) {
    this.apollo.mutate({
      mutation: UPDATE_GAME,
      variables: {
        id: id,
        input: {
          title: f.title,
          link: f.link,
          summary: f.summary,
          information: {
            developer: f.dev,
            publisher: f.pub,
            date: f.date,
            rating: f.rating,
            series: f.series,
            genres: f.genres,
            modes: f.modes,
            platforms: f.platforms
          }
        }
      },
    }).subscribe();
  }
  
  deleteGame(id:string) {
    this.apollo.mutate({
      mutation: DELETE_GAME,
      variables: {
        id: id
      }
    }).subscribe();
  }
 }
