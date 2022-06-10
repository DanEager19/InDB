import { Injectable } from '@angular/core';
import { Form, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Apollo, gql, QueryRef } from 'apollo-angular';

interface Information {
  dev: string;
  pub: string;
  date: string;
  rating: string;
}

interface Requirements {
  os: string;
  cpu: string;
  ram: string;
  gpu: string;
  storage: string;

};

export interface GameType {
  _id?:string;
  title?:string;
  link:string;
  summary?:string;
  information?:Information;
  requirements?:Requirements;
}

export interface GameInputType {
  title:string;
  link:string;
  summary:string;
  information:Information;
  requirements:Requirements;
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
      dev: new FormControl(''),
      pub: new FormControl(''),
      date: new FormControl(''),
      rating: new FormControl(''),
      os: new FormControl(''),
      cpu: new FormControl(''),
      ram: new FormControl(''),
      gpu: new FormControl(''),
      storage: new FormControl(''),
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
            dev: f.dev,
            pub: f.pub,
            date: f.date,
            rating: f.rating
          },
          requirements: {
            os: f.os,
            cpu: f.cpu,
            ram: f.ram,
            gpu: f.gpu,
            storage: f.storage
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
            dev: f.dev,
            pub: f.pub,
            date: f.date,
            rating: f.rating
          },
          requirements: {
            os: f.os,
            cpu: f.cpu,
            ram: f.ram,
            gpu: f.gpu,
            storage: f.storage
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
