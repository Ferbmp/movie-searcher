import "@ui5/webcomponents/dist/features/InputSuggestions.js";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, SuggestionItem } from "@ui5/webcomponents-react";
import { RootState } from "@/app/store/store";
import { setSearchTerm } from "@/app/store/movieSlice";

import { fetchMovies } from "@/app/services/movieService";
import { Movie } from "@/app/types";
import { debounce } from "@/app/utils";
import Spinner from "../../atoms/Spinner";

interface SearchBarProps {
  onMovieSelect: (movie: Movie) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onMovieSelect }) => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.movie.searchTerm);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedFetchMovies = debounce(async (query: string) => {
    setIsLoading(true);
    const results = await fetchMovies({ query });

    setTimeout(() => {
      setIsLoading(false);
    }, 700);

    setMovies(results);
  }, 600);

  const handleSearchChange = (newValue: string) => {
    dispatch(setSearchTerm(newValue));

    if (newValue.trim().length >= 3) {
      debouncedFetchMovies(newValue.trim());
    } else {
      setMovies([]);
    }
  };
  const findSelectedMovie = (e: any) => {
    const selectedMovie = movies.find(
      (movie) => movie.title === e.target.typedInValue
    );

    if (selectedMovie) {
      onMovieSelect(selectedMovie);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <Input
        value={searchTerm}
        onInput={(e) => handleSearchChange(e.target.value as string)}
        showSuggestions
        style={{ width: "482px" }}
        placeholder="Type anything to show movie suggestions"
        onSuggestionItemSelect={findSelectedMovie}
      >
        {movies.length > 0
          ? movies.map((movie, index) => (
              <SuggestionItem key={index} text={movie.title} />
            ))
          : !isLoading &&
            searchTerm.length > 3 && <SuggestionItem text="No movies found" />}
      </Input>

      {isLoading && (
        <div
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
