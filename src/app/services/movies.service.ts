import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, MoviesDto } from '../types/movie';
import { map } from 'rxjs';
import { VideoDto } from '../types/video';
import { ImagesDto } from '../types/image';
import { CreditsDto } from '../types/credits';

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
      ).pipe(map((data) => data.results.slice(0, count)));
  }

  getMovieById(id: string){
    return this.http.get<Movie>(`${this.apiUrl}/movie/${id}?api_key=${this.apikey}`)
  }

  getMovieVideos(id: string){
    return this.http.get<VideoDto>(
      `${this.apiUrl}/movie/${id}/videos?api_key=${this.apikey}`
      )
      .pipe(map((data) => data.results))
  }

  getMovieImages(id: string){
    return this.http.get<ImagesDto>(
      `${this.apiUrl}/movie/${id}/images?api_key=${this.apikey}`
      )
      .pipe(map((data) => 
        data.backdrops
      ));
            
  }

  getMovieCast(id: string){
    return this.http.get<CreditsDto>(
      `${this.apiUrl}/movie/${id}/credits?api_key=${this.apikey}`
      )
      .pipe(map((data) => 
        data.cast
      ));
            
  }

  getSimilarMovies(id: string, count =20){
    return this.http.get<MoviesDto>(
      `${this.apiUrl}/movie/${id}/similar?api_key=${this.apikey}`
    )
    .pipe(map((data) => data.results.splice(0, count)))
  }

  searchMovies(page: number, searchValue?: string){
    const uri = searchValue ? 'search/movie' : 'movie/popular';
    return this.http.get<MoviesDto>(
      `${this.apiUrl}/${uri}?query=${searchValue}&page=${page}&api_key=${this.apikey}`
    )
    
  }
  
}
