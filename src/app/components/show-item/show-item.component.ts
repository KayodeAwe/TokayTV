import { Component, Input } from '@angular/core';
import { Movie } from '../../types/movie';
import { IMAGEBASEURL } from '../../constants/images-sizes';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.scss'
})
export class ShowItemComponent {
  @Input() showItem: Movie | null = null;
  imageBaseUrl = IMAGEBASEURL;
}
