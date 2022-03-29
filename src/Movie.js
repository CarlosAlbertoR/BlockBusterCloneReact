import React from 'react';

function Movie(props) {
  const listDirectors = props.directors
    .split(',')
    .map((dir, i) =>
      i !== props.directors.split(',').length - 1 ? <a>{dir},</a> : <a>{dir}</a>
    );

  const listActors = props.actors
    .split(',')
    .map((act, i) =>
      i !== props.actors.split(',').length - 1 ? <a>{act},</a> : <a>{act}</a>
    );

  return (
    <div className="movie-item-style-2">
      <img src={props.coverImage} alt="" />
      <div className="mv-item-infor">
        <h6>
          <a href="moviesingle.html">
            {props.title} <span>({props.year})</span>
          </a>
        </h6>
        <p className="rate">
          <i className="ion-android-star" />
          <span>{props.rate}</span> /10
        </p>
        <p className="describe">{props.children}</p>
        <p className="run-time">
          Run Time: {props.runTime} . <span>MMPA: {props.mmpa} </span> .
          <span>Release: {props.release}</span>
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

export default Movie;
