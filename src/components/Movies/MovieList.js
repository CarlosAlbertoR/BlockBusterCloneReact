import { React, useEffect, useState } from 'react';
import Movie from './MovieCard/Movie';
import Pagination from './Paginator/Pagination';
// import moviesJson from '../../movies.json';

const API_KEY = '&api_key=a8b4257e96d4238a1d9b8379263933a1';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc${API_KEY}`;

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(5);

  const getMovies = async () => {
    // console.log('API', API_URL);
    const res = await fetch(`${API_URL}`);
    const resJSON = await res.json();
    if (resJSON) {
      const depureMovies = [];
      resJSON.results.forEach((movie) => {
        if (movie.poster_path !== null) {
          depureMovies.push(movie);
        }
      });
      setMovies(depureMovies);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const loadMovies = () =>
    movies.slice(
      (currentPage - 1) * moviesPerPage,
      (currentPage - 1) * moviesPerPage + moviesPerPage
    );

  const getTotalPages = () => Math.ceil(movies.length / moviesPerPage);

  return (
    <div>
      {loadMovies().map((movie) => (
        <Movie
          title={movie.title}
          year={movie.year}
          rate={movie.vote_average}
          runTime={movie.runTime}
          mmpa={movie.mmpa}
          release={movie.release}
          directors={movie.directors}
          actors={movie.actors}
          coverImage={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        >
          {movie.overview}
        </Movie>
      ))}
      {process.env.PUBLIC_URL}
      <Pagination
        current={currentPage}
        total={getTotalPages()}
        onChangePage={(page) => {
          setCurrentPage(page);
        }}
        onChangeItemsPerPage={(newValue) => {
          setMoviesPerPage(newValue);
          setCurrentPage(1);
        }}
      />
    </div>
  );
}

export default MovieList;
