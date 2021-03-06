import {
  ADD_MOVIE,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_ERROR,
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  GET_MOVIE_DELETE,
  DELETED_SUCCESS,
  DELETED_ERROR,
  GET_MOVIE_SWITCH,
  START_EDITION_SWITCH,
  EDIT_SUCCESS,
  EDIT_ERROR
} from "../types/index";
import axiosClient from "../config/axios";

// Create new movies
export function createNewMovieAction(movie) {
  return async dispatch => {
    dispatch(addMovie());

    try {
      setTimeout(async () => {
        // Insert in API
        await axiosClient.post("/movies", movie);

        // If everything is allright, update the state
        dispatch(addMovieSuccess(movie));
      }, 3000);
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

// Select and delete the movie
export const deleteMovieAction = id => {
  return async dispatch => {
    dispatch(getMovieDelete(id));
    try {
      setTimeout(async () => {
        await axiosClient.delete(`/movies/${id}`);
        dispatch(deleteMovieSuccess());
      }, 3000);
    } catch (error) {}
  };
};

const getMovieDelete = id => ({
  type: GET_MOVIE_DELETE,
  payload: id
});

const deleteMovieSuccess = () => ({
  type: DELETED_SUCCESS
});

const deleteMovieError = () => ({
  type: DELETED_ERROR,
  payload: true
});

// Select movie from list
export const switchWatched = movie => {
  return async dispatch => {
    dispatch(getMovieSwitch(movie));
  };
};

const getMovieSwitch = movie => ({
  type: GET_MOVIE_SWITCH,
  payload: movie
});

// Edit movie in API and state
export const editMovieAction = movie => {
  return async dispatch => {
    dispatch(editMovie(movie));
    try {
      const response = await axiosClient.put(`/movies/${movie.id}`, movie);
      dispatch(editMovieSuccess(movie));
    } catch (error) {}
  };
};

const editMovie = movie => ({
  type: START_EDITION_SWITCH
});

const editMovieSuccess = movie => ({
  type: EDIT_SUCCESS,
  payload: movie
});

// const switchMovieError = () => ({
//   type: SWITCH_ERROR,
//   payload: true
// });
