import React from "react";
import { Link } from "react-router-dom";
import {gql, useQuery} from '@apollo/client';
import {ApolloClient, NormalizedCacheObject} from '@apollo/client';
import { cache } from './cache';
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    uri: 'http://localhost:3000/graphql'
});
const GET_POSTS = gql`
{
    games {
        _id
        title
    }
}
`;
function GenerateAllGames() {
        const { loading, error, data } = useQuery(GET_POSTS);
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error!</div>;
        return (
            <div className="flexWrap">
                {
                    data.posts.map((post: { _id: string; title: string; }) => (
                        <div className="flexCol7" key={post._id}>
                            <Link to={'/info/' + post.title} >
                                <img id="cover" src={`../images/${post.title}`}/>
                            </Link>
                        </div>
                    ))
                }
            </div>
        );
}

export default GenerateAllGames