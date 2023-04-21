import { gql, useApolloClient, useQuery } from '@apollo/client';
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
            .then((results) => setMovies(results.data.allMovies));
    }, [client]);

    return (
        <div>
            {movies.map((el) => <li key={el.id}>{el.title}</li>)}
        </div>
    );
}
