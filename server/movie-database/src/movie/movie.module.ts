// src/movie/movie.module.ts
import { Module } from '@nestjs/common';
import { MoviesController } from './movie.controller';
import { MovieService } from './movie.service';

@Module({
  controllers: [MoviesController],
  providers: [MovieService],
})
export class MovieModule {}
