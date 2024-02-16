import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Observable, map } from 'rxjs';
import { MoviesDto } from '../../types/movie';
import { PaginatorState } from 'primeng/paginator';
import { ActivatedRoute } from '@angular/router';
import { TvshowsService } from '../../services/tvshows.service';
import { mapToMoviesDto } from '../../types/tvShow';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrl: './shows-list.component.scss',
  animations: [
    trigger('slideFade', [
      state('void', style({opacity:0})),
      transition('void <=> *', [animate('0.3s')])
    ]),
  ],
})
export class ShowsListComponent implements OnInit{

  showListType : 'movie' | 'tv' = 'movie'

  showsList$ : Observable<MoviesDto> | null = null;
  searchValue = '';

  constructor( private moviesService : MoviesService, private router : ActivatedRoute, private tvShowsService : TvshowsService){}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.showListType = params['type'];
      this.getPagedShows(this.showListType, 1)
    })
    

  }



  getPagedShows(showsType : 'movie' | 'tv', page: number, searchKeyword?: string){
    if(showsType === 'movie'){
      this.showsList$ = this.moviesService.searchMovies(page, searchKeyword);
    }
    if(showsType === 'tv') {
      this.showsList$ = this.tvShowsService.searchTVShows(page, searchKeyword)
                        .pipe(map(mapToMoviesDto))
    }
  }

  searchChanged(){
    this.getPagedShows(this.showListType, 1, this.searchValue)
  }

  pageChanged( event:PaginatorState){
      const pageNumber = event.page ? event.page + 1 : 1;
      this.getPagedShows(this.showListType, pageNumber, this.searchValue)
  }


    //Check if it is TV Show or Movie

    // If is Movie use the movie Search

    // If it is TV use the TV search

    //If it is TV get popular TVshows on Init

}
