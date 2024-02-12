import { Component, OnInit} from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { IMAGEBASEURL } from '../../constants/image-sizes';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  animations: [
    trigger('slideFade', [
      state('void', style({opacity:0})),
      transition('void <=> *', [animate('1s')])
    ]),
  ],
})
export class SliderComponent implements OnInit{
  slideIndex = 0;
  constructor(private movieService: MoviesService ){}

  Movie$ = this.movieService.getMoviesByType('popular');

  imageBaseUrl = IMAGEBASEURL;

  ngOnInit(): void {
    this.changSlides()
  }


  changSlides(){
    setInterval(() => {
      this.slideIndex ++
      this.slideIndex = this.clearCounter(this.slideIndex)
    }, 5000); 
  }

  clearCounter(counter:number){
    if(counter > 10){
      counter = 0;
    }
    return counter
  }

}
