import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export const Grid = () => {
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
      <div className="row movie-row"></div>
    </div>
  );
};
