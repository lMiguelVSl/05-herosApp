import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interface';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  termino: string = '';
  heroList: Hero[] = [];

  constructor(private heroService: HerosService) {}

  ngOnInit(): void {
  }

  search() {
    this.heroService.getSuggestions(this.termino)
    .subscribe(list => this.heroList = list);
  }
  optionSelected(event:any){
    console.log(event)
  }
}
