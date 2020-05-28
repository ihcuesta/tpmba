import { ADD_MOVIE, ADD_MOVIE_SUCCESS, ADD_MOVIE_ERROR } from "../types/index";
import axiosClient from "../config/axios";

// Create new movies
export function createNewMovieAction(movie) {
  return async dispatch => {
    dispatch(addMovie());

    try {
      // Insert in API
      await axiosClient.post("/movies", movie);

      // If everything is allright, update the state
      dispatch(addMovieSuccess(movie));
    } catch (error) {
      // If there is an error, change the state
      dispatch(addMovieError(true));
    }
  };
}

const addMovie = () => ({
  type: ADD_MOVIE,
  payload: true
});

// if movie saves correctly
const addMovieSuccess = movie => ({
  type: ADD_MOVIE_SUCCESS,
  payload: movie
});

// if there is any error
const addMovieError = estado => ({
  type: ADD_MOVIE_ERROR,
  payload: estado
});
