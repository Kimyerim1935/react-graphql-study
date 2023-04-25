import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

const ALL_MOVIES = gql`
    query getMovies {
        allMovies {
            title
            id
        }
    }
`;

export default function MovieList() {
    const { data, loading, error } = useQuery(ALL_MOVIES);

    if (loading) {
        return <h1>loading......</h1>;
    }
    if (error) {
        return <h1>{error}</h1>;
    } else
        return (
            <>
                {loading ? (
                    <span>LOADING.....</span>
                ) : (
                    <ul>
                        {data?.allMovies?.map((el) => (
                            <li key={el.id}>
                                <Link to={`/movies/${el.id}`}>{el.title}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </>
        );
}
