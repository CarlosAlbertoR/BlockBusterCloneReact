import { useState } from 'react';
import './App.css';
import PageWrapper from './PageWrapper';
import Movie from './Movie';
import Pagination from './Pagination';
import moviesJson from './movies.json'

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(5);
  
  let movies = moviesJson;

  const loadMovies = () => {
    return (
      movies.slice(
        (currentPage - 1) * moviesPerPage,
        (currentPage - 1) * moviesPerPage + moviesPerPage
      )
    );
  }


  const getTotalPages = () => {
    return Math.ceil(moviesJson.length / moviesPerPage);
  }

  return (
    <PageWrapper>
      {loadMovies().map(movie =>
        <Movie
          title={movie.title}
          year={movie.year}
          rate={movie.rate}
          runTime={movie.runTime}
          mmpa={movie.mmpa}
          release={movie.release}
          directors={movie.directors}
          actors={movie.actors}
          coverImage={movie.coverImage}
        >
          {movie.description}
        </Movie>
      )}

      <Pagination
        current={currentPage}
        total={getTotalPages()}
        onChangePage={(page) => {
          setCurrentPage(page)
        }}
        onChangeItemsPerPage={(newValue) => {
          setMoviesPerPage(newValue);
          setCurrentPage(1);
        }}
      />
    </PageWrapper>
  );
}

export default App;
