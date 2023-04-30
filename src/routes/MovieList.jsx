import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { Container, Header, Title, Loading, MoviesGrid, PosterContainer, PosterBg } from '../style/movieListComponents';

const ALL_MOVIES = gql`
    query getMovies {
        allMovies {
            id
            title
            medium_cover_image
        }
    }
`;

export default function MovieList() {
    const { data, loading } = useQuery(ALL_MOVIES);

        return (
            <Container>
                <Header>
                    <Title>Apollo Movies</Title>
                </Header>
                {loading && <Loading>Loading...</Loading>}
                <MoviesGrid>
                    {data?.allMovies?.map((movie) => (
                    <PosterContainer key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>
                        <PosterBg background={movie.medium_cover_image} />
                        </Link>
                    </PosterContainer>
                    ))}
                </MoviesGrid>
            </Container>
        );
}
