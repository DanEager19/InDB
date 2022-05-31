import { gql } from "apollo-angular";

const GET_GAMES = gql`
    query {
        games {
            _id
            title
        }
    }

`

export { GET_GAMES } 