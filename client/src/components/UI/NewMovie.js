import React, { useState } from "react";
import {
  ThePowerMovies,
  FormContainer,
  Input,
  Add,
  AddCont,
  Error
} from "../styled/HomeStyled";
import { useDispatch, useSelector } from "react-redux";

// Redux Actions
import { createNewMovieAction } from "../../actions/movieActions";

export const NewMovie = () => {
  const [movie, setMovie] = useState("");
  const [genres, setGenres] = useState([]);

  // Using dispatch
  const dispatch = useDispatch();

  // Access to store state
  const loading = useSelector(state => state.movies.loading);
  const error = useSelector(state => state.movies.error);

  // Call action of movie actions
  const addMovie = movie => {
    dispatch(createNewMovieAction(movie));
  };

  // When user submits
  const submitNewMovie = e => {
    e.preventDefault();

    // validation
    if (movie === "") {
      return;
    }

    // check errors

    // create new movie
    addMovie({
      movie,
      genres
    });
  };

  return (
    <FormContainer onSubmit={submitNewMovie}>
      <ThePowerMovies src="tpmovies.svg" alt="" />
      <Input
        value={movie}
        name="movie"
        type="text"
        placeholder="Movie name"
        onChange={e => setMovie(e.target.value)}
      />
      <Input
        name="genres"
        type="text"
        placeholder="Genres"
        onKeyDown={e => {
          if (e.keyCode == 13) {
            e.preventDefault();
            setGenres([...genres, e.target.value]);
            e.target.value = "";
          }
        }}
      />
      {error ? (
        <Error>
          <p>Error! Please, try again.</p>
        </Error>
      ) : null}
      <AddCont>
        <Add type="submit" value="Add Movie" />
      </AddCont>
      {loading ? <p>Loading...</p> : null}
    </FormContainer>
  );
};
