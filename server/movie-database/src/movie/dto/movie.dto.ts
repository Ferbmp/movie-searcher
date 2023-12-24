export class MovieDto {
  id: number;
  title: string;
  backdrop_path: string;

  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  vote_average: number;

  constructor(data?: any) {
    this.id = data?.id;
    this.title = data?.title;
    this.backdrop_path = data?.backdrop_path;

    this.overview = data?.overview;
    this.popularity = data?.popularity;
    this.poster_path = data?.poster_path;
    this.release_date = data?.release_date;
    this.vote_average = data?.vote_average;
  }
}
