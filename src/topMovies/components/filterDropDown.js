import React from "react";
import Form from "react-bootstrap/Form";
/**
 * Dropdown component
 * @param {function} handleFilter to handle data rendered as per top movie genre
 * @param {array} movieGenre holds different top movie genres
 */

function FilterDropDown(props) {
  return (
    <div>
      <Form.Select
        aria-label="Select Movie Genre"
        onChange={(e) => props.handleFilter(e.target.value)}
      >
        <option value="All">All</option>
        {props.genre.map((movieGenre, index) => {
          return (
            <option value={movieGenre} key={index}>
              {movieGenre}
            </option>
          );
        })}
      </Form.Select>
    </div>
  );
}

export default FilterDropDown;
