import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { mockStore } from "./setupTests";
import { act } from "react-dom/test-utils";

describe("App without data", () => {
  const store = mockStore({
    data: false,
  });

  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
  it("should renders heading", () => {
    expect(
      screen.getByRole("heading", { name: "Women's Top" })
    ).toBeInTheDocument();
  });

  it("should renders loading when data is not loaded", () => {
    expect(
      screen.getByRole("heading", { name: "loading..." })
    ).toBeInTheDocument();
  });
});

describe("App with data", () => {
  let container, store;
  const handleFilter = jest.fn();
  const props = {
    handleFilter,
  };
  store = mockStore({
    data: [
      {
        Title: "The Jungle Book",
        Year: "2016",
        Rated: "PG",
        Released: "15 Apr 2016",
        Runtime: "106 min",
        Genre: "Adventure, Drama, Family",
        Director: "Jon Favreau",
        Writer:
          "Justin Marks (screenplay), Rudyard Kipling (based on the books by)",
        Actors: "Neel Sethi, Bill Murray, Ben Kingsley, Idris Elba",
        Plot: "After a threat from the tiger Shere Khan forces him to flee the jungle, a man-cub named Mowgli embarks on a journey of self discovery with the help of panther, Bagheera, and free spirited bear, Baloo.",
        Language: "English",
        Country: "UK, USA",
        Awards: "Won 1 Oscar. Another 19 wins & 44 nominations.",
        Poster:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3NTUzNTI4MV5BMl5BanBnXkFtZTgwNjU0NjU5NzE@._V1_SX300.jpg",
        Metascore: "77",
        Rating: "7.5",
        Votes: "192,508",
        Id: "tt3040964",
        Type: "movie",
        DVD: "30 Aug 2016",
        BoxOffice: "$363,995,937.00",
        Production: "Walt Disney Pictures",
      },
    ],
  });

  beforeEach(() => {
    const wrapper = render(
      <Provider store={store}>
        <App {...props} />
      </Provider>
    );
    container = wrapper.container;
  });
  it("should renders heading", () => {
    expect(
      screen.getByRole("heading", { name: "Top Movies" })
    ).toBeInTheDocument();
  });
});
