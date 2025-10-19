import React from "react";
import { useMovieContext } from "../context/movieContext";
import Toaster from 'react-hot-toast'

const MovieCard = ({ movie, isFavoritePage = false }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useMovieContext();

  if (!movie) return null;

  const isAlreadyFavorite = favorites?.some(
    (fav) => fav.imdbID === movie.imdbID
  );

  return (
    <div className="bg-gray-900/80 border border-gray-700 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden backdrop-blur-lg text-left mt-8 w-full max-w-4xl mx-auto transition-all duration-300">
      {/* Poster Section */}
      <div className="md:w-1/3 flex justify-center items-center bg-gray-800 p-4">
        {movie.Poster && movie.Poster !== "N/A" ? (
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="rounded-lg shadow-lg object-cover w-full h-full max-h-[450px]"
          />
        ) : (
          <div className="w-full h-[300px] flex items-center justify-center text-gray-400 italic">
            No Poster Available
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="p-6 md:w-2/3 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold text-cyan-400 mb-2">
            {movie.Title}
          </h2>
          <p className="text-gray-300 mb-2">
            🎞️ <strong>Year:</strong> {movie.Year}
          </p>
          <p className="text-gray-300 mb-2">
            ⭐ <strong>IMDb:</strong> {movie.Ratings?.[0]?.Value || "N/A"}
          </p>
          <p className="text-gray-300 mb-2">
            🎭 <strong>Actors:</strong> {movie.Actors}
          </p>
          <p className="text-gray-300 mb-2">
            🎬 <strong>Director:</strong> {movie.Director}
          </p>
          <p className="text-gray-300 leading-relaxed mt-4 text-justify">
            <strong className="text-cyan-400">Plot:</strong> {movie.Plot}
          </p>
        </div>

        {/* Favorite Button */}
        <div className="mt-6 flex justify-end">
          {isFavoritePage ? (
            <button
              onClick={() => removeFromFavorites(movie.imdbID)}
              className="px-5 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white font-semibold transition-all"
            >
              ❌ Remove from Favorites
            </button>
          ) : (
            <button
              onClick={() => addToFavorites(movie)}
              disabled={isAlreadyFavorite}
              className={`px-5 py-2 rounded-lg text-white font-semibold transition-all ${
                isAlreadyFavorite
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-cyan-500 hover:bg-cyan-600"
              }`}
            >
              {isAlreadyFavorite ? "✅ Added" : "💖 Add to Favorites"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
