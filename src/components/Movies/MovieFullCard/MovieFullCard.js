import React from 'react';
import Moment from 'react-moment';

function MovieFullCard(props) {
  const movie = props;

  const listDirectors = movie.directors
    ? movie.directors
        .split(',')
        .map((dir, i) =>
          i !== movie.directors.split(',').length - 1 ? (
            <a href="http">{dir},</a>
          ) : (
            <a href="http">{dir}</a>
          )
        )
    : [];

  const listActors = movie.actors
    ? movie.actors
        .split(',')
        .map((act, i) =>
          i !== movie.actors.split(',').length - 1 ? (
            <a href="http">{act},</a>
          ) : (
            <a href="http">{act}</a>
          )
        )
    : [];

  return (
    <div className="movie-item-style-2">
      <img src={movie.coverImage} alt="" />
      <div className="mv-item-infor">
        <h6>
          <a href="moviesingle.html">
            {movie.title}{' '}
            <span>
              (<Moment date={movie.release} format="YYYY" />)
            </span>
          </a>
        </h6>
        <p className="rate">
          <i className="ion-android-star" />
          <span>{movie.rate}</span> /10
        </p>
        <p className="describe">{movie.children}</p>
        <p className="run-time">
          Run Time: {movie.runTime} . <span>MMPA: {movie.mmpa} </span> .
          <span>
            Release: <Moment date={movie.release} format="MMM Do YY" />
          </span>
        </p>
        <p>Director: {listDirectors}</p>

        <p>
          Stars:
          {listActors}
        </p>
      </div>
    </div>
  );
}

export default MovieFullCard;
