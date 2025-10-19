import { createContext, useContext, useState, useEffect } from "react";
import Toaster from 'react-hot-toast'

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
   const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites"); // get data
    return storedFavorites ? JSON.parse(storedFavorites) : []; // return it if found
  });

  const addToFavorites = (movie) => {
    setFavorites((prev) => [movie, ...prev]);
  };

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((movie) => movie.imdbID !== id));
  };

  // Local Storage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <MovieContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);
