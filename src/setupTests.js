// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
jest.unmock("./index.js");
jest.unmock("redux-mock-store");
jest.unmock("redux-thunk");

import "@testing-library/jest-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
export const mockStore = configureStore(middlewares);
