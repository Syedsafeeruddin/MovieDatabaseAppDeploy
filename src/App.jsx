import { useState } from "react";
import axios from "axios";
import MovieCard from "./components/MovieCard.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Typewriter from "./components/TypeWriter.jsx";
import { useMovieContext } from "./context/movieContext";


const App = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // for movie context
  const { favorites, addToFavorites, removeFromFavorites } = useMovieContext();

  const API_KEY = import.meta.env.VITE_API_KEY;

  const fetchMovie = async (movieName) => {
    setLoading(true);
    setError("");
    try {
      const API_URL = `https://www.omdbapi.com/?t=${movieName}&apikey=${API_KEY}`;
      const response = await axios.get(API_URL);
      setMovie(response.data);

      //Cheching for errors
      if (response.data.Response === "False") {
        setError("Movie Not Found");
        setMovie(null);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError("Movie Not Found");
      } else {
        setError("Something Went Wrong");
      }
      setMovie(null);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat relative text-white"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1682125771198-f7cbed7cb868?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2luZW1hfGVufDB8fDB8fHww')", // cinema vibes
      }}
    >
      {/* Overlay for cinematic dark tone */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 text-center px-6 w-full max-w-3xl">
        <h1 className="text-5xl font-extrabold text-cyan-400 drop-shadow-lg mb-6">
          🎬 <Typewriter text="Movie Database App" speed={90} />
        </h1>

        <SearchBar fetchMovie={fetchMovie} />

        {loading && (
          <div className="flex justify-center mt-10">
            <div className="w-12 h-12 border-4 border-gray-600 border-t-white rounded-full animate-spin"></div>
          </div>
        )}

        {error && (
          <p className="text-lg text-red-500 mt-6 font-semibold">{error}</p>
        )}

        {!loading && movie && movie.Title && (
          <MovieCard
            movie={movie}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
            favorites={favorites}
          />
        )}

      </div>
    </div>
  );
};

export default App;
