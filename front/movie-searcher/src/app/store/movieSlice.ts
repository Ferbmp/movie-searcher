"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MovieState {
   searchTerm: string;
   movieDetails: Record<string, any> | null;
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
      setMovieDetails: (state, action: PayloadAction<Record<string, any>>) => {
         state.movieDetails = action.payload;
      },
   },
});

export const { setSearchTerm, setMovieDetails } = movieSlice.actions;

export default movieSlice.reducer;
