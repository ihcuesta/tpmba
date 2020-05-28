import {
  ADD_MOVIE,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_ERROR,
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR
} from "../types/index";
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

// Fetch movies function
export function getMoviesAction() {
  return async dispatch => {
    dispatch(fetchMovies());
    try {
      const response = await axiosClient.get("/movies");
      dispatch(fetchMoviesSuccess(response.data));
    } catch (error) {
      dispatch(fetchMoviesError());
    }
  };
}

const fetchMovies = () => ({
  type: FETCH_MOVIES,
  payload: true
});

const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies
});

const fetchMoviesError = () => ({
  type: FETCH_MOVIES_ERROR,
  payload: true
});
