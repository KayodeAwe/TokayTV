import { Component, Input } from '@angular/core';
import { Movie } from '../../types/movie';
import { IMAGEBASEURL } from '../../constants/image-sizes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.scss'
})
export class ShowItemComponent {

  @Input() showItem: Movie | null = null;
  @Input() showType: 'tv' | 'movie' = 'movie';
  imageBaseUrl = IMAGEBASEURL;

  constructor(private router : Router){}

}


