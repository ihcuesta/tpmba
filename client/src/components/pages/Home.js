import React from "react";
import { ThePowerMovies } from "../styled/HomeStyled";
import { NewMovie } from "../UI/NewMovie";
import { Grid } from "../UI/Grid";

export const Home = () => {
  return (
    <>
      <NewMovie />
      <Grid />
    </>
  );
};
