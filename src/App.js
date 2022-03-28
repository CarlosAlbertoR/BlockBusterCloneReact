import './App.css';
import PageWrapper from './PageWrapper';
import Movie from './Movie';
import moviesJson from './movies.json'

function App() {
  let movies = moviesJson;

  return (
    <PageWrapper>
      {movies.map(movie =>
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
    </PageWrapper>
  );
}

export default App;
