import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducers from "./topMovies/reducers/rootReducer";

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export const store = createStoreWithMiddleware(
  rootReducers,
  window.__REACT_DEVTOOLS_EXTENSION__ && window.__REACT_DEVTOOLS_EXTENSION__()
);
