import styles from "./MovieDetails.module.scss"; // Importa o SCSS
import { Movie } from "@/app/types";
import Image from "next/image";
import MovieRating from "../../molecules/MovieRating";
import { useEffect, useState } from "react";
import Button from "../../atoms/Button";

interface MovieDetailsProps {
   movie: Movie;
}

const MovieDetails = ({ movie }: MovieDetailsProps) => {
   const [isFavorited, setIsFavorited] = useState(false);

   useEffect(() => {
      if (movie && movie.id) {
         const favorites = JSON.parse(
            localStorage.getItem("favoriteMovies") || "[]"
         );
         setIsFavorited(favorites.includes(movie.id));
      }
   }, [movie]);

   const handleFavoriteClick = () => {
      const movieId = movie.id;
      const favorites = JSON.parse(
         localStorage.getItem("favoriteMovies") || "[]"
      );

      if (!favorites.includes(movieId)) {
         favorites.push(movieId);
         localStorage.setItem("favoriteMovies", JSON.stringify(favorites));
         setIsFavorited(true);
      } else {
         const newFavorites = favorites.filter((id: number) => id !== movieId);
         localStorage.setItem("favoriteMovies", JSON.stringify(newFavorites));
         setIsFavorited(false);
      }
   };

   if (!movie) {
      return <div>No movie selected.</div>;
   }

   return (
      <div className={styles.movieDetails}>
         <div className={styles.movieContent}>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>

            <div className={styles.ratingContainer}>
               <MovieRating rating={movie.vote_average} />
            </div>

            <Button
               onClick={handleFavoriteClick}
               icon='favorite'
               iconEnd
               design={"Default"}
               style={{
                  color: isFavorited ? "#fd0101" : "#0064d9",
                  width: "120px",
               }}
            >
               {isFavorited ? "Unfavorite" : "Favorite"}
            </Button>
         </div>
         <div className={styles.movieImage}>
            <Image
               src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
               alt={`${movie.title} Poster`}
               width={380}
               height={500}
            />
         </div>
      </div>
   );
};

export default MovieDetails;
