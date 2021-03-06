import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../actions/actions";
import Cards from "../components/cards";
import MovieDetails from "../components/movieDetails";

/**
 * Women Top header component.
 * Basically a wrapper for showing header component and conditional
 * for succesfully fetched data
 * @param {array} data Array of data fetched from api
 * @param {function} fetchData action to fetch api data
 * @param {boolean} isLoaded to check data is fetched sucessfully
 */

function TopMovies() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  const [movieSelected, setMovieSelected] = React.useState({});

  React.useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const isLoaded = !!data;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const passDetails = (movie) => {
    scrollToTop();
    setMovieSelected(movie);
  };
  return (
    <>
      <MovieDetails movieSelected={movieSelected} />
      <div className="App">
        {isLoaded ? (
          <>
            <h3>Select Any Movie</h3>
            <Cards
              data={data}
              scrollToTop={scrollToTop}
              passDetails={passDetails}
              setMovieSelected={setMovieSelected}
            />
          </>
        ) : (
          <>
            <h1>Fail to load data</h1>
          </>
        )}
      </div>
    </>
  );
}

export default TopMovies;
