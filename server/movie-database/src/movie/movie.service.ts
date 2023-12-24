import { Injectable } from '@nestjs/common';
import api from 'src/config/api';
import { MovieDto } from './dto/movie.dto';
import { RawMovieData } from 'src/types';

@Injectable()
export class MovieService {
  async searchMovies(
    query: string,
    includeAdult: boolean = false,
    language: string,
    page: number = 1,
  ): Promise<MovieDto[]> {
    const response = await api.get('/search/movie', {
      params: {
        query,
        include_adult: includeAdult,
        language,
        page,
      },
    });

    return response.data.results.map((movie: RawMovieData) =>
      this.transformToMovieDto(movie),
    );
  }

  private transformToMovieDto(data: RawMovieData): MovieDto {
    return new MovieDto(data);
  }
}
