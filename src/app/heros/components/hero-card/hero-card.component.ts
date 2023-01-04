import { Component, Input } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html'
})
export class HeroCardComponent {
  @Input() hero: Hero = {
    id: '',
    superhero: '',
    publisher: Publisher.DCComics,
    alter_ego: '',
    first_appearance: '',
    characters: ''
  };
}
