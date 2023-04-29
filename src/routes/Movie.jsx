import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const GET_MOVIE = gql`
    query getMovie($movieId: String!) {
        movie(id: $movieId) {
            id
            title
        }
    }
`

export default function Movie() {
    const { id } = useParams();
    const { loading, data } = useQuery(GET_MOVIE, {
        variables: {
            movieId: id
        }
    });
    if (loading) {
        return
    }
    console.log(data, loading);

    return (
        <>
            {
                loading ?  <h1>Fetching........ movie</h1> : <h3>{data.movie.title}</h3>
            }
        </>
    )
}
