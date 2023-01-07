import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Hero } from '../../interfaces/heroes.interface';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit, OnDestroy{
  
  @Input() heroId: string = ''; 

  heroIdRoute!: Subscription; 
  hero: Observable<Hero> = new Observable;

  constructor(private activatedRoute: ActivatedRoute, private heroService: HerosService) {
        
  }

  ngOnInit(): void {
    this.heroIdRoute = this.activatedRoute.params
    .subscribe(({id}) => {
      this.hero = this.heroService.getHeroById(id);
      console.log(this.hero);
    });
  }

  ngOnDestroy(): void {
  if (this.heroIdRoute) this.heroIdRoute.unsubscribe();
  }

}
