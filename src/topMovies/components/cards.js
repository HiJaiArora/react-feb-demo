import React, { useMemo } from "react";
import Card from "react-bootstrap/Card";
import FilterDropDown from "./filterDropDown";

/**
 * card component.
 * Basically a wrapper around filterdrop down menu and cards
 * @param {array} props.data Component props
 * @param {memoized value} calculateGenre Array of options for genre
 * @param {function} handleFilter Callback for when the dropdown filter is selected
 * @param {props type} cardData Config for useState hook
 * @param {function} setCardData props data from top movies.
 *
 */

function Cards(props) {
  const [cardData, setCardData] = React.useState(props.data);

  React.useEffect(() => {
    setCardData(props.data);
  }, [props.data]);

  const handleFilter = (size) => {
    if (size !== "All") {
      const filteredData = props.data.filter((item) => {
        return item.Genre.split(",").includes(size);
      });
      props.setMovieSelected({});
      setCardData(filteredData);
    } else {
      setCardData(props.data);
      props.setMovieSelected({});
    }
  };

  const calculateGenre = useMemo(() => {
    let genre = [];
    if (props.data) {
      props.data.forEach((movie) => {
        genre.push(movie.Genre.split(","));
      });
      genre = [...new Set(genre.flat(Infinity))];

      return genre;
    } else return [];
  }, [props.data]);

  return (
    <>
      <FilterDropDown handleFilter={handleFilter} genre={calculateGenre} />
      <div className="Cards">
        {cardData &&
          cardData.map((item, index) => {
            return (
              <Card
                key={index}
                style={{
                  width: "15rem",
                  margin: "1rem",
                }}
                onClick={() => props.passDetails(item)}
              >
                <Card.Img variant="top" src={item.Poster} />
                <Card.Body key={index} style={{ height: "10.125rem" }}>
                  <Card.Title key={item.Title}>{item.Title}</Card.Title>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </>
  );
}

export default Cards;
