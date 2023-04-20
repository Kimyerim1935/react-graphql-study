import { gql, useApolloClient } from '@apollo/client';
import { useEffect, useState } from 'react';

export default function MovieList() {
    const client = useApolloClient();

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        client
            .query({
                query: gql`
                    {
                        allMoview {
                            title
                        }
                    }
                `,
            })
            .then((results) => setMovies(results));
    }, [client]);

    console.log(movies);
    return <>this is MovieList</>;
}
