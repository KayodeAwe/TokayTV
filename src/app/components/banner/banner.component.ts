import { Component, Input } from '@angular/core';
import { Movie } from '../../types/movie';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent{
  @Input() title = '';
  @Input() shows : Movie[] = [] 
  @Input() showsType : 'tv' | 'movie' = 'movie'

}
