import { gql } from "apollo-angular";
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

interface GameType {
  _id?: string;
  title: string;
  summary?: string;
  information?: Information;
  requirements?: Requirements;
}
const GET_ALL_GAMES = gql`
    query {
        games {
            _id
            title
        }
    }
`;

const GET_FULL_GAME = gql`
    query findGameByTitle($title: String!) {
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
        }
    }
`;
const UPDATE_GAME = gql`
    mutation {
        updateGame(id: $id, input: $input) {
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
        }
    }
`;
/*
const UPDATE_GAME 
const DELETE_GAME
*/
export { GET_ALL_GAMES, GET_FULL_GAME, UPDATE_GAME, Information, Requirements, GameType }