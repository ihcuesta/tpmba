import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faTrash } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import {
  getMoviesAction,
  deleteMovieAction,
  switchWatched,
  editMovieAction
} from "../../actions/movieActions";
import { TagsContainer, Tag } from "../styled/HomeStyled";
import { Loader } from "../styled/GlobalStyles";

export const Grid = () => {
  const dispatch = useDispatch();

  // Switch watched etition
  // const movietoedit = useSelector(state => state.movies.movieswitch);
  // console.log(movietoedit);

  useEffect(() => {
    const loadMovies = () => dispatch(getMoviesAction());
    loadMovies();
  }, []);

  // Get the state
  const movies = useSelector(state => state.movies.movies);
  const loading = useSelector(state => state.movies.loading);

  // Edit movie
  const editMovie = movie => {
    movie.watched = !movie.watched;
    dispatch(editMovieAction(movie));
  };

  // Order movies

  // Get watched and not watched yet
  const watched = movies.filter(movie => {
    return movie.watched === true;
  });

  const notWatched = movies.filter(movie => {
    return movie.watched === false;
  });

  // Join them to get new order
  const newOrder = [...notWatched, ...watched];

  // Confirm if the user wants to delete the movie
  const confirmDeleteMovie = id => {
    // Ask user
    // Send to action
    dispatch(deleteMovieAction(id));
  };

  // Switch movie watched
  const switchMovie = id => {
    // Ask user
    // Send to action
    dispatch(switchWatched(id));

    // editWatched()
  };

  return (
    <div className="grid-container">
      <div className="row grid-header">
        <div className="watch-status">
          <h3>Status</h3>
        </div>
        <div className="movie-title">
          <h3>Title</h3>
        </div>
        <div className="movie-genres">
          <h3>Genres</h3>
        </div>
        <div className="movie-actions">
          <h3>Actions</h3>
        </div>
      </div>
      {loading ? (
        <Loader>
          <img src="loader.gif" alt="" />
        </Loader>
      ) : null}
      {movies.length === 0 ? (
        <div className="no-results">
          <p>There are not movies yet.</p>
        </div>
      ) : (
        newOrder.map(movie => {
          return (
            <div key={movie.id} className="row movie-row">
              <div className="watch-status">
                {movie.watched === false ? (
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    className="eye-icon light"
                    onClick={() => editMovie(movie)}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faEye}
                    className="eye-icon"
                    onClick={() => editMovie(movie)}
                  />
                )}
              </div>
              <div className="movie-title">
                <p>{movie.movie}</p>
              </div>
              <div className="movie-genres">
                <TagsContainer>
                  {movie.genres.map(genre => {
                    return <Tag>{genre}</Tag>;
                  })}
                </TagsContainer>
              </div>
              <div className="movie-actions">
                <FontAwesomeIcon
                  icon={faTrash}
                  className="eye-icon"
                  onClick={() => confirmDeleteMovie(movie.id)}
                />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
