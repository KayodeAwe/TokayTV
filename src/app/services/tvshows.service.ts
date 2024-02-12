import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { TvshowDto } from '../types/tvShow';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {

  private apiUrl = 'https://api.themoviedb.org/3';
  private apikey = 'd44259f5724e5664c42d195042e2adf7'

  constructor(private http: HttpClient) { }

  getShowByType(type: string, count=20){
    return this.http.get<TvshowDto>(`${this.apiUrl}/tv/${type}?api_key=${this.apikey}`)
                    .pipe(map((res) => res.results.slice(0, count)))
  }


}
