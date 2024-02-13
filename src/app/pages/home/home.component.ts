import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { TvshowsService } from '../../services/tvshows.service';
import { map } from 'rxjs';
import { mapToMovies } from '../../types/tvShow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private moviesService : MoviesService, private tvShowsService: TvshowsService){}

  upcomingMovies$ = this.moviesService.getMoviesByType('upcoming', 12);
  topRatedMovies$ = this.moviesService.getMoviesByType('top_rated', 12);
  popularMovies$ = this.moviesService.getMoviesByType('popular', 12)
 
  // popularTvSeries$ = this.tvShowsService.getShowByType('popular', 12)
  //                     .pipe(map((tvshows) => {
  //                       return mapToMovies(tvshows)
  //                     }))
  popularTvSeries$ = this.tvShowsService.getShowByType('popular', 12)
                      .pipe(map((mapToMovies)))

}