import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
/**
 * Dropdown component
 * @param {function} handleFilter to handle data rendered as per top movie genre
 * @param {array} movieGenre holds different top movie genres
 */

function FilterDropDown(props) {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Genre
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => props.handleFilter("All")}>
            All Movie
          </Dropdown.Item>
          {props.genre.map((movieGenre, index) => {
            return (
              <Dropdown.Item
                key={index}
                onClick={() => props.handleFilter(movieGenre)}
              >
                {movieGenre}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default FilterDropDown;
