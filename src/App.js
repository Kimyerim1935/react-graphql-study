import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieList from './routes/MovieList';
import Movie from './routes/Movie';
import client from './client';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MovieList />} />
                <Route path="/movies/:id" element={<Movie />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
