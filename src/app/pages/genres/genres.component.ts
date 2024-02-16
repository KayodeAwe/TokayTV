import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';
import { Genre, MoviesDto } from '../../types/movie';
import { PaginatorState } from 'primeng/paginator';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.scss'
})
export class GenresComponent implements OnInit{

  genres$: Observable<Genre[]> | null = null;
  movieGenres$ : Observable<MoviesDto> | null = null;
  genreId: string = '';
  constructor(private moviesService : MoviesService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((params) =>{
      this.genreId = params['genreId'];
      if(this.genreId === undefined){
        this.genreId = '';
      }
      this.movieGenres$ = this.moviesService.getMoviesByGenre(this.genreId)
    })
    this.genres$ = this.moviesService.getMoviesGenres();
  }

  // findByGenre(genreId: string){

  // }

  pageChanged( event:PaginatorState){
    const pageNumber = event.page ? event.page + 1 : 1;
    this.movieGenres$ = this.moviesService.getMoviesByGenre(this.genreId, pageNumber)
  }

}
