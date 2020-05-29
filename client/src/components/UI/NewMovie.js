import React, { useState } from "react";
import {
  ThePowerMovies,
  FormContainer,
  Input,
  Add,
  AddCont,
  Error,
  Tag,
  TagsContainer
} from "../styled/HomeStyled";
import { useDispatch, useSelector } from "react-redux";

// Redux Actions
import { createNewMovieAction } from "../../actions/movieActions";

export const NewMovie = () => {
  const [movie, setMovie] = useState("");
  const [genres, setGenres] = useState([]);

  const genresFunction = e => {
    if (e.keyCode == 13) {
      const genreAdded = genres.filter(genre => {
        return genre === e.target.value.toLowerCase();
      });
      if (genreAdded.length > 0) {
        e.target.value = "";
        return;
      }
      console.log(genreAdded);
      e.preventDefault();
      setGenres([...genres, e.target.value.toLowerCase()]);
      e.target.value = "";
    }
  };

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

    // clean fields
    setMovie("");
    setGenres([]);

    // create new movie
    addMovie({
      movie,
      genres,
      watched: false
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
      <TagsContainer>
        {genres.map(genre => {
          return <Tag>{genre}</Tag>;
        })}
      </TagsContainer>
      <Input
        name="genres"
        type="text"
        placeholder="Genres"
        onKeyDown={e => genresFunction(e)}
      />
      {error ? (
        <Error>
          <p>Error! Please, try again.</p>
        </Error>
      ) : null}
      {/* {movie === "" ? (
        <Error>
          <p>Movie field can't be empty.</p>
        </Error>
      ) : null} */}
      <AddCont>
        <Add type="submit" value="Add Movie" />
      </AddCont>
    </FormContainer>
  );
};
