import api from "../api";

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
   } catch (error: any) {
      if (api.isCancel(error)) {
         console.log("Request canceled", error.message);
      } else {
         console.error("Error fetching movies:", error);
      }
      return [];
   }
};
