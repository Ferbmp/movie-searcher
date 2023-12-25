import api from "../api";
import { AxiosError } from "axios";

interface FetchMoviesParams {
  query: string;
  page?: number;
}

export const fetchMovies = async ({ query, page }: FetchMoviesParams) => {
  try {
    const response = await api.get("/movies/search", {
      params: {
        query,
        include_adult: false,
        language: "en",
        page,
      },
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (api.isCancel(axiosError)) {
      console.log("Request canceled", axiosError.message);
    } else {
      console.error("Error fetching movies:", error);
    }
    return [];
  }
};
