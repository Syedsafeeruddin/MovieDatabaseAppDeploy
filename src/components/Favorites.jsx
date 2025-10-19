import { useMovieContext } from "../context/movieContext";
import MovieCard from "./MovieCard";

const Favorites = () => {
  const { favorites, removeFromFavorites } = useMovieContext();

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-black text-white p-10">
      <h1 className="text-4xl font-bold text-cyan-400 mb-8">🎥 Your Favorites</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-400 text-lg">No favorite movies yet. Go add some!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              removeFromFavorites={removeFromFavorites}
              isFavoritePage={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
