import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { TvshowDto, Tvshow } from '../types/tvShow';
import { ImagesDto } from '../types/image';
import { VideoDto } from '../types/video';
import { CreditsDto } from '../types/credits';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {

  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'd44259f5724e5664c42d195042e2adf7'

  constructor(private http: HttpClient) { }

  getShowByType(type: string, count=20){
    return this.http.get<TvshowDto>(`${this.apiUrl}/tv/${type}?api_key=${this.apiKey}`)
                    .pipe(map((res) => res.results.slice(0, count)))
  }

  getTvShowById(id: string) {
    return this.http.get<Tvshow>(
      `${this.apiUrl}/tv/${id}?api_key=${this.apiKey}`
    );
  }


  getTvShowVideos(id: string) {
    return this.http
      .get<VideoDto>(`${this.apiUrl}/tv/${id}/videos?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results));
  }

  getTvShowImages(id: string) {
    return this.http
      .get<ImagesDto>(`${this.apiUrl}/tv/${id}/images?api_key=${this.apiKey}`)
      .pipe(map((data) => data.backdrops));
  }

  getTvShowCast(id: string) {
    return this.http
      .get<CreditsDto>(`${this.apiUrl}/tv/${id}/credits?api_key=${this.apiKey}`)
      .pipe(map((data) => data.cast));
  }

  getTvShowSimilar(id: string) {
    return this.http
      .get<TvshowDto>(`${this.apiUrl}/tv/${id}/similar?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results.slice(0, 12)));
  }


  searchTVShows(page: number, searchValue?: string){
    const uri = searchValue ? 'search/tv' : 'tv/popular';
    return this.http.get<TvshowDto>(
      `${this.apiUrl}/${uri}?query=${searchValue}&page=${page}&api_key=${this.apiKey}`
    )
    
  }


}
