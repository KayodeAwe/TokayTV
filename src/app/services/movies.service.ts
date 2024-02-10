import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MoviesDto } from '../types/movie';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor(private http:HttpClient) { }

  getPopularMovies = () => {
    return this.http.get<MoviesDto>(
      'https://api.themoviedb.org/3/movie/popular?api_key=d44259f5724e5664c42d195042e2adf7'
      )
  }
}
