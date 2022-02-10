import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../actions/actions";
import Cards from "../components/cards";

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

  React.useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const isLoaded = !!data;
  return (
    <div className="App">
      <h1>Top Movies</h1>
      {isLoaded ? <Cards data={data} /> : <h1>loading...</h1>}
    </div>
  );
}

export default TopMovies;
