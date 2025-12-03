import { useState } from "react";
import type Movie from "../../types/movie";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import MovieGrid from "../MovieGrid/MovieGrid";
import MovieModal from "../MovieModal/MovieModal";
import SearchBar from "../SearchBar/SearchBar";
import { fetchMovies } from "../services/movieService";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = async (query: string) => {
    try {
      setMovies([]);
      setIsLoading(true);
      setIsError(false);
      const data = await fetchMovies(query);
      setMovies(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const isHide = true;
  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {!isHide && <MovieGrid items={movies} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {!isHide && <MovieModal />}
    </>
  );
}

export default App;
