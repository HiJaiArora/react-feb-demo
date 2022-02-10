import axios from "axios";

const baseURL = "https://run.mocky.io/v3/d03e0886-f5c8-4961-902d-51bfe8059a33";

export function fetchData() {
  return async function (dispatch) {
    try {
      axios.get(baseURL).then(function (response) {
        dispatch({ type: "FETCHED", payload: response.data });
      });
    } catch (err) {
      dispatch({ type: "FAILED", error: err });
    }
  };
}
