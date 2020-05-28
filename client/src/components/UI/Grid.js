import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { getMoviesAction } from "../../actions/movieActions";
import { TagsContainer, Tag } from "../styled/HomeStyled";

export const Grid = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadMovies = () => dispatch(getMoviesAction());
    loadMovies();
  }, []);

  // Get the state
  const movies = useSelector(state => state.movies.movies);
  console.log(movies.movies);

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
      {movies.length === 0 ? (
        <div className="no-results">
          <p>There are not movies yet.</p>
        </div>
      ) : (
        movies.map(movie => {
          return (
            <div className="row movie-row">
              <div className="watch-status">
                <FontAwesomeIcon icon={faEye} className="eye-icon" />
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
              <div className="movie-actions"></div>
            </div>
          );
        })
      )}
    </div>
  );
};
