import { Component } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interface';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  heros: Hero[] = [];

  /**
   *
   */
  constructor( private heroesService: HerosService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe(res => this.heros = res);
  }
}
