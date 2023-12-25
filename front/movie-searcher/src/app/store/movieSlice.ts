"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../types";

interface MovieState {
  searchTerm: string;
  movieDetails: Movie | null;
}

const initialState: MovieState = {
  searchTerm: "",
  movieDetails: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setMovieDetails: (state, action: PayloadAction<Movie>) => {
      state.movieDetails = action.payload;
    },
  },
});

export const { setSearchTerm, setMovieDetails } = movieSlice.actions;

export default movieSlice.reducer;
