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
      <TagsContainer>
        {genres.map(genre => {
          return <Tag>{genre}</Tag>;
        })}
      </TagsContainer>
      <Input
        name="genres"
        type="text"
        placeholder="Genres"
        onKeyDown={e => {
          if (e.keyCode == 13) {
            const genreAdded = genres.filter(genre => {
              return genre === e.target.value;
            });
            if (genreAdded.length > 0) {
              return;
            }
            console.log(genreAdded);
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
      {/* {movie === "" ? (
        <Error>
          <p>Movie field can't be empty.</p>
        </Error>
      ) : null} */}
      <AddCont>
        <Add type="submit" value="Add Movie" />
      </AddCont>
      {loading ? <p>Loading...</p> : null}
    </FormContainer>
  );
};
