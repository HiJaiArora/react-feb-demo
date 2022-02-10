import React from "react";
import { Image, ListGroup } from "react-bootstrap";

/**
 * Women Top header component.
 * Basically a wrapper for showing header component and conditional
 * for succesfully fetched data
 * @param {array} data Array of data fetched from api
 * @param {function} fetchData action to fetch api data
 * @param {boolean} isLoaded to check data is fetched sucessfully
 */

function MovieDetails(props) {
  const { movieSelected } = props;
  return (
    <>
      <div className="movie-details">
        {movieSelected.Title ? (
          <>
            <Image
              src={props.movieSelected.Poster}
              rounded
              //   style={{ height: "100%" }}
            />
            <ListGroup className="movie-detil-list" as="ol" numbered>
              <h2 className="title">{movieSelected.Title}</h2>
              {movieSelected &&
                Object.entries(movieSelected)
                  .slice(1, 11)
                  .map(([key, value]) => {
                    return (
                      <ListGroup.Item
                        as="li"
                        key={key}
                        className="d-flex justify-content-between align-items-start"
                      >
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">{key}</div>
                          {value}
                        </div>
                      </ListGroup.Item>
                    );
                  })}
            </ListGroup>
          </>
        ) : (
          <h1>Please Select any Movie to fetch Details</h1>
        )}
      </div>
    </>
  );
}

export default MovieDetails;
