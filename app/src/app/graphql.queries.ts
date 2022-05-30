import { gql } from "apollo-angular";

const GET_GAMES = gql`
    query {
        games {
            title
        }
    }

`

const CREATE_GAME = gql`
    Mutation createGame($input: GameType) {
        createGame(input: {
            title: $title
            summary: $summary
            information: {
                dev: $dev
                pub: $pub
                date: $date
                rating: $rating
            }
            requirements: {
                os: $os
                cpu: $cpu
                ram: $ram
                gpu: $gpu
                storage: $storage
            }
        })
    }
`