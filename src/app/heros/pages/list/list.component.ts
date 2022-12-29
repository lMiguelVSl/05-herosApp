import { Component } from '@angular/core';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  /**
   *
   */
  constructor( private heroesService: HerosService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe(res => console.log(res));
  }
}
