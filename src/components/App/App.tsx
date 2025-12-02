import { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import MovieGrid from "../MovieGrid/MovieGrid";
import MovieModal from "../MovieModal/MovieModal";
import SearchBar from "../SearchBar/SearchBar";

function App() {
  const [isHide, setIsHide] = useState(true);
  return (
    <>
      <SearchBar />
      {!isHide && <MovieGrid />}
      {!isHide && <Loader />}
      {!isHide && <ErrorMessage />}
      {!isHide && <MovieModal />}
    </>
  );
}

export default App;
