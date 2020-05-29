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
  const [genreField, setGenreField] = useState([]);

  const genresFunction = e => {
    if (e.keyCode == 13) {
      const genreAdded = genres.filter(genre => {
        return genre === genreField.toLowerCase();
      });
      if (genreAdded.length > 0) {
        setGenreField("");
        return;
      }
      console.log(genreAdded);
      e.preventDefault();
      setGenres([...genres, genreField.toLowerCase()]);
      setGenreField("");
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
    setGenreField("");

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
        value={genreField}
        name="genres"
        type="text"
        placeholder="Genres"
        onChange={e => setGenreField(e.target.value)}
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
