import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, MoviesDto } from '../types/movie';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  private apiUrl = 'https://api.themoviedb.org/3';
  private apikey = 'd44259f5724e5664c42d195042e2adf7'

  constructor(private http:HttpClient) { }

  getMoviesByType(type:string, count=20){
    return this.http.get<MoviesDto>(
      `${this.apiUrl}/movie/${type}?api_key=${this.apikey}`
      ).pipe(map((res) => res.results.slice(0, count)));
  }

  getMovieById(id: string){
    return this.http.get<Movie>(`${this.apiUrl}/movie/${id}?api_key=${this.apikey}`)
  }

}
