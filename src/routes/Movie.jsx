import { useParams } from 'react-router-dom';
import { gql,  useQuery } from '@apollo/client';
import { Container, Column, Title, Subtitle, Image } from '../style/movieComponents';

const GET_MOVIE = gql`
    query getMovie($movieId: String!) {
        movie(id: $movieId) {
            id
            title
            medium_cover_image
            rating
            isLiked @client
        }
    }
`

export default function Movie() {
    const { id } = useParams();
    const { loading, data , client: {cache}} = useQuery(GET_MOVIE, {
        variables: {
            movieId: id
        }
    });

    const handleClick = () => {
        cache.writeFragment({
            id: `Movie:${id}`,
            fragment: gql`
                fragment MovieFragment on Movie {
                isLiked
                }
            `,
            data: {
                isLiked: !data.movie.isLiked,
            },
        });
    }

    return (
        <Container>
            <Column>
                <Title>{loading ? "Loading..." : `${data.movie?.title}`}</Title>
                <Subtitle>⭐️ {data?.movie?.rating}</Subtitle>
                <button onClick={handleClick}>{data?.movie?.isLiked ? "UnLike" : "Like"}</button>
            </Column>
            <Image bg={data?.movie?.medium_cover_image} />
        </Container>
    )
}
