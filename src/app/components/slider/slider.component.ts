import { Component, Input, OnInit} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { IMAGEBASEURL } from '../../constants/image-sizes';
import { Movie } from '../../types/movie';

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
  @Input() slides : Movie[] = [];
  @Input() isHeader = false;
  
  constructor( ){}

  imageBaseUrl = IMAGEBASEURL;

  ngOnInit(): void {
    if(!this.isHeader){
      this.changSlides()
    }
  }


  changSlides(){
    setInterval(() => {
      this.slideIndex ++
      this.slideIndex = this.clearCounter(this.slideIndex)
    }, 5000); 
  }

  clearCounter(counter:number){
    if(counter > this.slides.length){
      counter = 0;
    }
    return counter
  }

}
