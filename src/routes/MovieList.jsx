import { gql, useQuery } from '@apollo/client';

const ALL_MOVIES = gql`
    query getMovies{
        allMovies {
            title
            id
        }
        allTweets {
            id
            text
            author {
                fullName
            }
        }
    }
`;

export default function MovieList() {
    const { data, loading, error } = useQuery(ALL_MOVIES);
    console.log(data.allTweets);
    
    if (loading) {
        return <h1>loading......</h1>
    } 
    if (error) {
        return <h1>{error}</h1>
    }
    else return (
        <>
            {loading ? <span>LOADING.....</span>: (
            <ul>
                {data?.allMovies?.map((el) => <li key={el.id}>{el.title}</li>)}
            </ul>
            )}
        </>
    );
}
