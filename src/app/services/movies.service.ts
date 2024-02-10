import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MoviesDto } from '../types/movie';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  private apiUrl = 'https://api.themoviedb.org/3';
  private apikey = 'd44259f5724e5664c42d195042e2adf7'

  constructor(private http:HttpClient) { }

  getPopularMovies = () => {
    return this.http.get<MoviesDto>(
      `${this.apiUrl}/movie/popular?api_key=${this.apikey}`
      );
  }

  getUpcomingMovies() {
    return this.http.get<MoviesDto>(
      `${this.apiUrl}/movie/upcoming?api_key=${this.apikey}`
      );
  }
}
