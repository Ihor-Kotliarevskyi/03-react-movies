import axios from "axios";
import type Movie from "../../types/movie";

interface MoviesHttpResponse {
  hits: Movie[];
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get<MoviesHttpResponse>(
    `https://hn.algolia.com/a_pi/v1/search?query=${query}`
  );
  return response.data.hits;
};
