import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';
import { Movie } from '../../types/movie';


@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss'
})
export class ShowDetailComponent implements OnInit{

  showId = '';
  show$:Observable<Movie> | null = null

  constructor( private router : ActivatedRoute, private moviesService: MoviesService){}

  

  ngOnInit(): void {
    // this.router.params.subscribe((param) => {
    //   this.showId = param['id']
    // })

    this.showId = this.router.snapshot.params['id']
    this.show$ = this.moviesService.getMovieById(this.showId)
  }

}
