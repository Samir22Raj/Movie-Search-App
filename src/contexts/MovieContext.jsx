import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  // ERRORS:
  // 1. When Page is refreshed, favorites are gone from LocalStorage.
  // 2. using "if (favorites.length > 0)" is solved the issue. but it not removed last favorites, always hold one favorite as lenght > 0.

  // SOLUTION:
  // const [favorites, setFavorites] = useState([]); always set empty array as initial state.
  // 1. Change the initial state of favorites to a function that returns the parsed value of the stored favorites in localStorage if favorites are available, otherwise a empty array.
  // 2. Remove the useEffect that sets the initial state of favorites from localStorage.
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  /*
  useEffect(() => {
    const storeFavorites = localStorage.getItem("favorites");

    if (storeFavorites) setFavorites(JSON.parse(storeFavorites));
  }, []);
  */

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  /*
  useEffect(() => {
//  if (favorites.length > 0) {
    if (favorites !== undefined) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);
  */

  const addFavorites = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFavorites = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const value = {
    favorites,
    addFavorites,
    removeFavorites,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
