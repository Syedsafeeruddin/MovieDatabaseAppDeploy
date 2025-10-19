import { useState } from "react";

const SearchBar = ({ fetchMovie }) => {
  const [movieDetails, setMovieDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movieDetails.trim()) {
      fetchMovie(movieDetails);
      setMovieDetails("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center gap-3 mb-10"
    >
      <input
        type="text"
        placeholder="Search Movies..."
        value={movieDetails}
        onChange={(e) => setMovieDetails(e.target.value)}
        className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-cyan-400 outline-none w-full max-w-md placeholder-gray-400"
      />
      <button
        type="submit"
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-5 py-3 rounded-lg shadow-lg hover:shadow-cyan-400/50 transition-transform hover:scale-105"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
