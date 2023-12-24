import { RatingIndicator } from "@ui5/webcomponents-react";

interface MovieRatingProps {
   rating: number;
}

const MovieRating: React.FC<MovieRatingProps> = ({ rating }) => {
   return <RatingIndicator value={rating / 2} max={5} />;
};

export default MovieRating;
