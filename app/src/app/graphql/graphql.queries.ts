import { gql } from "apollo-angular";

const GET_GAMES = gql`
    query {
        games {
            _id
            title
        }
    }

`

const GET_FULL_GAME = gql`
    query {
        games {
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
`

export { GET_GAMES, GET_FULL_GAME } 