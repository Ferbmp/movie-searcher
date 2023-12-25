"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/store";
import Header from "./components/organisms/Header";
import SearchBar from "./components/molecules/SearchBar";
import { setMovieDetails } from "./store/movieSlice";
import styles from "./styles/Home.module.scss";
import MovieDetails from "./components/organisms/MovieDetails";
import { Movie } from "./types";

export default function Page() {
  const dispatch = useDispatch();
  const movieDetails = useSelector(
    (state: RootState) => state.movie.movieDetails
  );

  const handleMovieSelect = (movie: Movie) => {
    dispatch(setMovieDetails(movie));
  };

  return (
    <div>
      <Header />
      <main className={styles.pageContainer}>
        <div>
          <SearchBar onMovieSelect={handleMovieSelect} />
        </div>

        <MovieDetails movie={movieDetails as Movie} />
      </main>
    </div>
  );
}
