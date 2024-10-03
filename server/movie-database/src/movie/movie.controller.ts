// src/movie/movie.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieDto } from './dto/movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MovieService) {}

  @Get('search')
  async searchMovies(
    @Query('query') query: string,
    @Query('includeAdult') includeAdult: string,
    @Query('language') language: string,
    @Query('page') page: string = '1',
  ): Promise<MovieDto[]> {
    return this.movieService.searchMovies(
      query,
      includeAdult === 'false',
      language,
      parseInt(page),
    );
  }
}
