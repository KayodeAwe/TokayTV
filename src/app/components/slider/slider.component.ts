import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements OnInit{

  Movie:any;
  
  constructor( private http:HttpClient){}

  ngOnInit(): void {
    this.getPopularMovies()
  }

  getPopularMovies = () => {
    this.http.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=d44259f5724e5664c42d195042e2adf7'
      ).subscribe((data) => {
        this.Movie = data
        console.log('The popular Movie', this.Movie.results)
      })
  }
}
